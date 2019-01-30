var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var busSchema = new Schema({
  noOfSeats: {
    type: Number,
    min: 20,
    max: 72,
    require: true
  },
  busname: {
    type: String,
    require: true
  }
});

var Bus = (module.exports = mongoose.model("Bus", busSchema));
