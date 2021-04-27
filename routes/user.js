const express = require("express");
const router = express.Router();

const users = [];

router.get("/signup", (req, res) => {
  res.render("signup", { title: "Sign Up" });
});

router.post("/signup", (req, res) => {
  try {
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});

module.exports = router;
