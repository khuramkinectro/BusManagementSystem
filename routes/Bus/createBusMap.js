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
  res.render("busMap");
});
router.get("/busMap", function(req, res) {
  console.log("busaaaamap");
  res.render("busMap");
});

module.exports = router;
