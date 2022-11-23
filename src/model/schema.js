const mongoose = require("mongoose");

//defining structure
const dataSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  data: {
    type: Array,
  },
});

//creating new collection
const Data = new mongoose.model("Data", dataSchema);

// Exporting collection object
module.exports = Data;
