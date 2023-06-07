const express = require("express");
const mongoose = require("mongoose");

const handlebars = require("express-handlebars");
const path = require("path");
const expressConfig = require("./config/expressConfig");
const handlebarsConfig = require("./config/handlebarsConfig");
const connectDb = require("./config/dbConfig");
const routes = require("./routes");

const app = express();

const PORT = 5000;

expressConfig(app);
handlebarsConfig(app);

connectDb()
  .then(() => console.log("DB connected successfully"))
  .catch((err) => console.log(`DB error: ${err}`));

app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT} ...`));
