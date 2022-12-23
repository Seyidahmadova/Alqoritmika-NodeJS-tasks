const express = require("express");
const data = require("./data.json");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(data);
});

app.listen(3000, function () {
  console.log("App listening on port 3000!");
});
