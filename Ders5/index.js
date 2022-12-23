const { json } = require("body-parser");
const express = require("express");
const data = require("./data.json");
const app = express();

app.use(express.json());

app.get("/:id", (req, res) => {
  res.json(data.data.filter((el) => el.id.toString() === req.params.id.toString()));
});

app.listen(3000, function () {
  console.log("App listening on port 3000!");
});
