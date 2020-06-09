/**
 * Required External Modules
 */
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const util = require('util');

/**
 * App Variables
 */

/**
 *  App Configuration
 */
// create app and expose port on which app will run
const app = express();
const port = process.env.PORT || "8000";

// set path to view templates and set template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));

// load CartItem model
const CartItem = require("./models/CartItem");

// DB Config
const url = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(url,{ useNewUrlParser: true , useUnifiedTopology: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
  res.render("index", { title: "AlgaeCal Product Bundle Specials" });
});


app.get("/shopping_cart", function(req, res, next) {

 setTimeout(() => {CartItem.find(function(err, docs) {
	  	if (err) {
	      return res.redirect('/');
	    }
	    console.log(docs.length);
	    const result = calculatTotal(docs);
		console.log(result);
	    res.render('shopping_cart', { cartInfo: { cartItems: docs, total: result } } );
	  }); 
	}, 1000);
});

function calculatTotal(docs) {
	let total = docs.reduce( function(tot, cartItem) {
    		return tot + cartItem.extended;
		}, 0);
	return total;
}

app.get("/add_to_cart/:supply/:price", (req, res) => {
  if (req.params.supply && req.params.price) {
  	// query if item is already present if so, update by incrementing quantity by one and adding to price extended
  	CartItem.findOne({ supply: req.params.supply }).then(cartItem => {
  		if (cartItem) {
  			cartItem.quantity++;
  			cartItem.extended += Number(req.params.price); 
  			cartItem
			  .save()
			  .catch(err => console.log(err));
  		} else {			
		  	const newCartItem = new CartItem({
		  		supply: req.params.supply,
		        itemDescription: req.params.supply + " Month Supply of AlgaeCal Plus & Strontium Boost",
		        price: req.params.price,
		        quantity: 1,
		        extended: req.params.price
		      });
		  	newCartItem
			  .save()
			  .catch(err => console.log(err));
  		}
  	})
  } else {
    return res.status(400)
  }
   res.redirect('/shopping_cart');
});


app.get("/empty_cart", (req, res) => { 
	CartItem.deleteMany([], function (err) {
  		if (err) console.log(err);
  		console.log("Successful deletion");
	});
	res.redirect('/');
});


/**
 * Server Activation
 */

 app.listen(port, () => {
  console.log(`
  Listening to requests on http://localhost:${port}`);
});