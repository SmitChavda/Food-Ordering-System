//jshint esversion:6

const express = require("express");
const parser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
app.use(
  parser.urlencoded({
    extended: true,
  })
);

app.use(express.static("public"));

var object = [];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/Views/index.html");
});

app.post("/", (req, res) => {
  console.log("Post method called");
  var name = req.body.name;
  var email = req.body.Email;
  var number = req.body.Number;
  var time = req.body.time;
  var person = req.body.persons;
  object = [name, email, number, time, person];
  console.log(object);
});

app.get("/:route", (req, res) => {
  var paramsValue = req.params.route;

  res.sendFile(__dirname + "/Views/" + paramsValue + ".html");
});

app.post("/:route", (req, res) => {
  //Post request from contact.html
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});