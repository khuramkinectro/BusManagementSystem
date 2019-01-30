var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");

var mongoose = require("mongoose");
var path = require("path");
var expressValidator = require("express-validator");

mongoose.connect("mongodb://localhost/BusReservation");
var db = mongoose.connection;

var index = require("./routes/Bus/index");
var busMap = require("./routes/Bus/createBusMap");
var resverSeat = require("./routes/Bus/busMap");
//Initialize You app
var app = express(); //1
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//view engine
app.set("views", path.join(__dirname, "views")); // 2
app.engine("handlebars", exphbs({ defaultLayout: "layout" }));
app.set("view engine", "handlebars");

//BodyParser Middleware
// This body-parser module parses the JSON, buffer,
//string and URL encoded data submitted using HTTP POST request.

//static folder like jquery image stylesheet these file
app.use(express.static(path.join(__dirname, "public")));

//express validator
app.use(
  expressValidator({
    errorFormatter: function(param, msg, value) {
      console.log("express validator");

      var namespace = param.split("."),
        root = namespace.shift(),
        formParam = root;
      while (namespace.length) {
        formParam += "[" + namespace.shift() + "]";
      }
      return {
        param: formParam,
        msg: msg,
        value: value
      };
    }
  })
);

//global variable
app.use(function(req, res, next) {
  res.locals.seats = req.seats || null;
  next();
});

app.use("/", index);
app.use("/bus", busMap);
app.use("/bus", resverSeat);

//set port
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), function() {
  console.log("server started on port" + app.get("port"));
});
