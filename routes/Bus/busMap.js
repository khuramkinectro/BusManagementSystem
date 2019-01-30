var express = require("express");
const app = express();
var router = express.Router();
var SeatsReservation = require("../../models/seatBooked");

router.get("/getseatsDetail", function(req, res) {
  SeatsReservation.find().then(function(doc) {
    console.log("get SeatsReservation");
    res.render("getseatsDetail", { Seats: doc });
    if (SeatsReservation.seatResorNot) {
      console.log("true");
    } else {
      console.log("false");
    }
  });
});
router.get("/seatsdetail/:id", function(req, res) {
  SeatsReservation.findOne({ id: req.params.id }, function(err, obj) {
    console.log(obj);
    //res.render("getseatsDetail", { Seats: doc });
  });
});

router.get("/ok", function(req, res) {
  SeatsReservation.find({ seatResorNot: true }, function(err, doc) {
    if (err) {
      console.log("error");
    } else {
      console.log(doc);
    }
  });
});
router.get("/buttonid", function(req, res) {
  res.render("create");
});

router.get("/ResSeatss", function(req, res) {
  id = myjsfile.clickedID;
  console.log(id);
  res.render("create");
});
//###############################################################//
// var btnID;
// router.post("/buttonid", function(req, res) {
//   btnID = req.body.Seats;
//   console.log("btn id ", btnID);
//   // res.render("create");
//   router.post("/SeeBusMap", function(req, res) {
//     if (req.body._id == "") {
//       insertRecord(req, res);
//     } else {
//       getRecord(req, res);
//     }
//   });
// });
// function insertRecord(req, res) {
//   console.log("insertRecord");
// }
// function getRecord(req, res) {
//   console.log("getRecord");
// }
//   router.post("/SeeBusMap", function(req, res) {
//     console.log(btnID);
//     var newSeats = new SeatsReservation({
//       seatNo: btnID,
//       PessengerName: req.body.PessengerName,
//       deposit: req.body.deposit,
//       seatStatus: req.body.seatStatus,
//       seatResorNot: true
//     });
//     newSeats.save((err, doc) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(doc);
//         res.redirect("/bus/getseatsDetail");
//       }
//     });
//   });
// });
//###############################################################//

router.get("/SeeBusMap", function(req, res) {
  SeatsReservation.find({ myid: req.body._id }, function(err, obj) {
    console.log(obj);
    res.render("busMap", { Resv: obj });
  });
});

//***************************************************************//
// var btnID;
// router.post("/buttonid", function(req, res) {
//   btnID = req.body.Seats;
//   console.log("btn id ", btnID);
//   res.render("create");

//   router.post("/SeeBusMap", function(req, res) {
//     console.log(btnID);
//     var newSeats = new SeatsReservation({
//       seatNo: btnID,
//       PessengerName: req.body.PessengerName,
//       deposit: req.body.deposit,
//       seatStatus: req.body.seatStatus,
//       seatResorNot: true
//     });
//     newSeats.save((err, doc) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(doc);
//         res.render("busMap");
//       }
//     });
//   });
// });
//************************************************************* *//

var btnID;
router.post("/buttonid", function(req, res) {
  btnID = req;
  console.log("btn id ", btnID);
  // res.render("create");
  router.post("/SeeBusMap", function(req, res) {
    console.log(req.body);
    if (btnID == false) {
      console.log("inseart");
      insertRecord(req, res);
    } else {
      console.log("get");
      getRecord(req, res);
    }
  });
});
module.exports = router;
