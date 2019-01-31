var express = require("express");
var router = express.Router();
var Bus = require("../../models/busSchema");

router.post("/busMap", function(req, res) {
  var newBus = new Bus({
    noOfSeats: req.body.noOfSeats,
    busname: req.body.busname
  });
  console.log(req.seats);
  newBus.save();
  res.redirect("/bus/busMap");
  // docs.push({
  //   noOfSeats: req.body.noOfSeats,
  //   busname: req.body.busname
  // });
  // // let docs = [];
  // // for (let i = 0; i < req.body.noOfSeats; i++) {}
  // return Bus. (docs);
});

router.get("/busMap", function(req, res) {
  Bus.find().then(function(doc) {
    res.render("busMap", { Seats: doc });
  });
});
module.exports = router;
