//imports
const express = require("express");
const bodyParser = require("body-parser");
require("./db/conn");

const port = process.env.PORT || 3000;
const app = express();

//middlewares
app.set("view engine", "ejs");
app.use((req, res, next) => {
  console.log("redirecting to ->");
  console.log("HTTP Method = " + req.method + " URL = " + req.url);
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/html/pastebin.html");
});

app.post("/", function (req, res) {
  console.log(req.body.data);
});

app.get("/:id", async (req, res) => {
  res.render("dynamic", { id: req.params.id });
});

app.listen(port, "0.0.0.0", function () {
  console.log(`server is up at ${port}`);
});
