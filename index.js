/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");

/**
 * App Variables
 */

/**
 *  App Configuration
 */

const app = express();
const port = process.env.PORT || "8000";

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));

/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
  res.render("index", { title: "AlgaeCal Product Bundle Specials" });
});

app.get("/shopping_cart", (req, res) => {
  console.log(req.query)
  res.render("shopping_cart", { title: "Bundle Added", bundleAdded: { month_supply: req.query.supply, price:req.query.price } });
});

/**
 * Server Activation
 */

 app.listen(port, () => {
  console.log(`
  Listening to requests on http://localhost:${port}`);
});