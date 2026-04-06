const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  userId: String,
  text: String,
  channel: String,
  time: String
});

module.exports = mongoose.model("Message", messageSchema);