require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UsersMainRoutes = require("./routes/users_main_routes");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", UsersMainRoutes);
app.use("/", (req, res) => {
  res.send("Welcome to the API!");
});

mongoose
  .connect("mongodb://localhost:27017/users_data")
  .then(() => {
    console.log("db is connected");
    app.listen(8000, () => {
      console.log("server listening on 8000 port");
    });
  })
  .catch((err) => console.log(err));
