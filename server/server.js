const express = require("express");
const app = express();

app.use(express.json());

app.use("/", (req, res) => {
  res.send("Welcome to the API!");
});

app.listen(8000, () => {
  console.log("server listening on 8000 port");
});
