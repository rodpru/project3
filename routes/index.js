const express = require("express");
const User = require("../models/user-model");
const router = express.Router();
const School = require("../models/school-model");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});
// router.get("/profile/:id", (req, res, next) => {
//   const id = req.params.id;
//   User.findById(id).then((user) => {
//     return School.find({ _id: user.favorites }).then((response) => {
//       console.log(response);
//       res.json(response);
//     });
//   });
// });

router.get("/profile/:id", (req, res, next) => {
  const id = req.params.id;
  User.findById(id).then((user) => {
    return School.find({ name: user.favorites }).then((response) => {
      console.log(response, "profile data");
      res.json(response);
    });
  });
});

router.post("/profile", (req, res) => {
  const username = req.body.user;
  const favorite = req.body.id;
  console.log('this is the favorite route with username and schoolname', username, favorite);
  User.findByIdAndUpdate(username, {
    $push: { favorites: favorite },
  }).then((response) => {
    res.json(response);
  });
});

module.exports = router;
