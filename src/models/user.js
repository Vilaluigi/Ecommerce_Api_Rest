const mongoose = require("mongoose");

const User = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", User);
