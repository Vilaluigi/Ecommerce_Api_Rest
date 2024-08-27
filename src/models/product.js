const mongoose = require("mongoose");
const User = require("./user");
const Product = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productDescrption: {
    type: String,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productQuant: {
    type: Number,
    required: true,
  },
  productImage: {
    type: String,
  },
  username: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
  ],
});

module.exports = mongoose.model("Product", Product);
