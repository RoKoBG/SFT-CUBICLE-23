const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required!'],
    minLength: [5,'Username must be minumum 5 characters long!'],
    match: /^[A-Za-z0-9]+$/,
    unique: true,
  },
  password: {
    type: String,
    required: [true,'Password is required!'],
    validate: {
      validator: function (value) {
        return /^[A-Za-z0-9]+$/.test(value);
      },
      message: `Invalid password characters!`,
    },
    minLength: [8,'Password must be minumum 8 characters long!'],
  },
});

userSchema.virtual("repeatPassword").set(function (value) {
  if (value !== this.password) {
    throw new Error("Password is not matched!");
  }
});

userSchema.pre("save", async function () {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
});

const User = mongoose.model("User", userSchema);
module.exports = User;
