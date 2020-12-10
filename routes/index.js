const express = require("express");
const router = express.Router();
const path = require("path");

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

router.all("*", (req, res, next) => {
  if (req.originalUrl.startsWith("/api")) {
    // skip any /api routes
    next();
  } else {
    res.sendFile(path.join(__dirname, "../dist/index.html"));
  }
});

module.exports = router;
