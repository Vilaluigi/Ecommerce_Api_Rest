const mongoose = require("mongoose");
const User = require("./user");
const Product = require("./product");
const Cart = new mongoose.Schema({
  Products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Product,
    },
  ],
  userName: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
  ],
  address: {
    street: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
  },
  payment: {
    card: {
      number: {
        type: String,
      },
      cvc: {
        type: String,
      },
    },
  },
});

module.exports = mongoose.model("Cart", Cart);
