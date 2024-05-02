const mongoose = require("mongoose");

const POSTSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  author: { type: String, required: true },
});

POSTSchema.methods.toLocalString = function () {
  return this.created_at.toLocalString();
};

module.exports = mongoose.model("Post", POSTSchema);
