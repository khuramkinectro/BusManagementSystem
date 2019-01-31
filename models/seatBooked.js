var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Seatbooked = new Schema({
  busId: { type: Schema.Types.ObjectId, ref: "Bus" },
  seatNo: { type: String },
  PessengerName: { type: String, require: true },
  deposit: { type: Number, require: true },
  seatStatus: { type: String, require: true },
  seatResorNot: { type: Boolean, default: false }
});

var SeatsReservation = (module.exports = mongoose.model(
  "SeatsReservation",
  Seatbooked
));
