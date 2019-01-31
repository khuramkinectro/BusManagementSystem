var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var busSchema = new Schema({
  busname: {
    type: String,
    require: true
  },
  noOfSeats: {
    type: Number,
    require: true
  }
});

var Bus = (module.exports = mongoose.model("Bus", busSchema));
