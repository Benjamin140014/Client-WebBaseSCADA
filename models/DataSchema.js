const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String , 
  data: Number,
  date: {
    type: Date,
    default: Date.now
  }
});
const Data = mongoose.model("dataSimulation", dataSchema);
module.exports = Data;
