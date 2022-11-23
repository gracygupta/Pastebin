const express = require("express");
const router = express.Router();
const gen_id = require("../controller/idGenerator");
const Data = require("../model/schema");

//home
router.get("/", function (req, res) {
  res.render("pastebin");
});

router.post("/", async (req, res) => {
  pasted = req.body.data;
  const result = pasted.split("\n");
  id = gen_id();
  console.log("id: ", id);
  Data.create({
    id: id,
    data: result,
  });
  //   res.redirect(`/${id}`);
});

// app.get("/:id", async (req, res) => {
//   res.render("dynamic", { data: req.data });
// });

module.exports = router;
