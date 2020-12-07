const express = require("express");
const User = require("../models/user-model");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});
router.get("/profile", (req, res, next) => {
  const username = req.body.username;
  User.findOne(username).then((user) => {
    res.json(user);
  });
});

module.exports = router;
