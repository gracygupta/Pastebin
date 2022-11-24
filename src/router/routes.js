const express = require("express");
const router = express.Router();
const gen_id = require("../controller/idGenerator");
const Data = require("../model/schema");

//home
router.get("/", function (req, res) {
  res.render("pastebin");
});

router.post("/", async (req, res) => {
  try {
    pasted = req.body.data;
    const result = pasted.split("\n");
    id = gen_id();
    console.log("id assigned: ", id);
    Data.create({
      id: id,
      data: result,
    })
      .then(() => console.log("record created"))
      .catch((e) => console.log(e));
    res.redirect(`/${id}`);
  } catch (e) {
    res.send("Error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const pasteData = await Data.findOne({ id: req.params.id });
    console.log(pasteData.data);
    res.render("dynamic", { data: pasteData.data });
  } catch (e) {
    res.send("Error");
  }
});

module.exports = router;
