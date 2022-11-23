//imports
const express = require("express");
const bodyParser = require("body-parser");
require("./db/conn");
const cookieParser = require("cookie-parser");

const app = express();
const port = process.env.PORT || 3000;
const mins = 1000 * 60 * 15;

//Routes import
const routes = require("./router/routes");

//middlewares
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(cookieParser());
app.use((req, res, next) => {
  console.log("redirecting to ->");
  console.log("HTTP Method = " + req.method + " URL = " + req.url);
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.use(routes);

app.listen(port, "0.0.0.0", function () {
  console.log(`server is up at ${port}`);
});
