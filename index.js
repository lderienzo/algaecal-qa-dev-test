/**
 * Required External Modules
 */
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");

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

app.get("/shopping_cart", (req, res) => {
  console.log(req.query)
  if (req.query.supply && req.query.price) {
  	// query if item is already present if so, update by incrementing quantity by one and adding to price extended
  	CartItem.findOne({ supplyAmount: req.query.supply }).then(cartItem =>{
  		if (cartItem) {
  			cartItem.quantity++;
  			cartItem.extended += Number(req.query.price); 
  			cartItem
			  .save()
			  .catch(err => console.log(err));
  		}
  		else {			
		  	const newCartItem = new CartItem({
		  		supplyAmount: req.query.supply,
		        itemDescription: req.query.supply + " Month Supply of AlgaeCal Plus & Strontium Boost",
		        price: req.query.price,
		        quantity: 1,
		        extended: req.query.price
		      });
		  	newCartItem
			  .save()
			  .catch(err => console.log(err));
  		}
  	})
  }
  res.render("shopping_cart", { title: "Bundle Added", bundleAdded: { month_supply: req.query.supply, price:req.query.price } });
});

/**
 * Server Activation
 */

 app.listen(port, () => {
  console.log(`
  Listening to requests on http://localhost:${port}`);
});