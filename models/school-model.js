const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schoolSchema = new Schema({
  name: String,
  address: String,
  description: String,
  email: String,
  site: String,
  phone: String,
  rating: Number,
  photo: String,
  globalID: String,
  geo: {
    lat: Number,
    lng: Number,
  },
});

const School = mongoose.model("School", schoolSchema);
module.exports = School;
