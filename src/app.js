const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.end("foobar");
});

module.exports = app;
