const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const users = [];

router.get("/signup", (req, res) => {
  res.render("signup", { title: "Sign Up" });
});

router.post("/signup", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log(hashedPassword);
    const newUser = { username: req.body.username, password: hashedPassword };
    users.push(newUser);
    res.redirect("/");
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});

module.exports = { router, users };
