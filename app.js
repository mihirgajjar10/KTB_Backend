const express = require("express");
const path = require("path");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const api = require("./routes/api");
var cors = require("cors");

require("dotenv").config();


var app = express();
var server = require("http").Server(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(fileUpload());
app.use("/api", api);


var port = process.env.PORT || 8080;
app.set("port", port);
server.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
