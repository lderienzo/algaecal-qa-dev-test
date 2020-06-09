const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CartItemSchema = new Schema({
  supply: {
    type: Number,
    required: true
  },
  itemDescription: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  extended: {
    type: Number,
    required: true 
  }
});

module.exports = CartItem = mongoose.model("CartItem", CartItemSchema);