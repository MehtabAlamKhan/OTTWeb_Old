const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is Required"],
      min: [6, "Mininum 6 characters are required"],
      max: [25, "Max 25 characters are allowed"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Invalid Password"],
      min: [6, "Mininum 6 characters are required"],
      trim: true,
      max: 1024,
    },
    email: {
      type: String,
      required: [true, "Invalid Email"],
      max: 255,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
