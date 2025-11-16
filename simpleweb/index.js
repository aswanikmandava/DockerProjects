const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello doing");
});

app.listen(8085, () => {
  console.log("Listening on port 8085");
});
