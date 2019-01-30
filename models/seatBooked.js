var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Seatbooked = new Schema({
  seatNo: {
    type: String
  },
  PessengerName: {
    type: String,
    require: true
  },
  deposit: {
    type: Number,
    // min: 200,
    // max: 1000,
    require: true
  },
  seatStatus: {
    type: String,
    require: true
  },
  seatResorNot: {
    type: Boolean,
    default: false
  }
});
var SeatsReservation = (module.exports = mongoose.model(
  "SeatsReservation",
  Seatbooked
));
