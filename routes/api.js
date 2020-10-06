var express = require("express");
var fs = require("fs");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

//  file upload routes
eval(fs.readFileSync("routes/fileRoute.js") + "");

module.exports = router;
