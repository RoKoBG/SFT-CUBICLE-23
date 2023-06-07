const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/cubicle";

async function connectDb() {
  await mongoose.connect(uri);
}
connectDb

module.exports = connectDb;
