var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  res.render("index");
  console.log("index");
});

module.exports = router;
