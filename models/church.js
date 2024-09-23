const mongoose = require("mongoose"); //import mongoose
const Schema = mongoose.Schema; //create a mongoose schema

/** Creates Schema for Inventory Items **/
const churchSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  pastor: {
    type: String,
    unique: true,
  },
  phone: {
    type: String,
    unique: true,
  },
  address: {
    type: String,
    required: true,
    unique: true,
  },
});
/** End of Schema **/

module.exports = mongoose.model("Church", churchSchema); //Export Church Schema as "Church"
