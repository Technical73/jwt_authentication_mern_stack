const mongoose = require("mongoose");
const user_schema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email_id: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
});

const user_model = new mongoose.model("user", user_schema);
module.exports = user_model;
