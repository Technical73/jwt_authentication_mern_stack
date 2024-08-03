const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const UsersData = require("../models/users_schema_models");
const jwt = require("jsonwebtoken");

/* sign up api */
router.post("/signup", async (req, res) => {
  try {
    const { username, email_id, password, confirmPassword } = req.body;

    if (!username || !email_id || !password || !confirmPassword) {
      return res.status(403).json({ message: `All the fields are required` });
    }

    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ message: `Passwords do not match with confirm password` });
    }

    const userExist = await UsersData.findOne({ email_id: email_id });
    if (userExist) {
      return res
        .status(400)
        .json({ message: `User already exist with this email` });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const hashConfirmPassword = await bcrypt.hash(confirmPassword, 10);

    const newUser = {
      username,
      email_id,
      password: hashedPassword,
      confirmPassword: hashConfirmPassword,
    };

    const newUsers = await UsersData.create(newUser);

    res
      .status(201)
      .json({ message: "You have successfully signed up", data: newUsers });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

/* sign in api */
router.post("/signin", async (req, res) => {
  try {
    const { email_id, password } = req.body;

    if (!email_id || !password) {
      return res.status(403).json({ message: `All the fields are required` });
    }

    const user = await UsersData.findOne({ email_id: email_id });
    if (!user) {
      return res
        .status(404)
        .json({ message: `User not found with this email` });
    }

    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      return res.status(401).json({ message: `Invalid password` });
    }

    const token = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ message: "User signed in successfully", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
