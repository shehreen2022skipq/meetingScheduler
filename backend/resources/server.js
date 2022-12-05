const express = require("express");
const { createDB, getDetails } = require("./mongodb");
const cors = require("cors");
const body_parser = require("body-parser");

const app = express(); // acquiring express
app.use(body_parser.json());
app.use(cors());

app.listen(3000, function () {
  console.log("server has started");
});

app.post("/", (req, res) => {
  console.log(req.body);
  createDB(req.body).then((response) => {
    res.send(response);
  });
});

app.get("/", (req, res) => {
  getDetails().then((data) => {
    res.send(data);
  });
  console.log("get method working");
});

module.exports = app;
