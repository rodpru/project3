const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { response } = require("../app");
const School = require("../models/school-model");
const User = require("../models/user-model");

//Route to retrieve all schools
router.get("/schools", (req, res) => {
  console.log("loggeduser", req.user);
  School.find().then((allSchoolsFromDB) => {
    res.json(allSchoolsFromDB);
  });
});

router.get("/kindergartens", (req, res) => {
  console.log("loggeduser", req.user);
  School.find({ schoolType: "kindergarten" }).then((allKindergartensFromDB) => {
    res.json(allKindergartensFromDB);
  });
});

router.get("/nurseries", (req, res) => {
  console.log("loggeduser", req.user);
  School.find({ schoolType: "nursery" }).then((allNurseriesFromDB) => {
    console.log(allNurseriesFromDB);
    res.json(allNurseriesFromDB);
  });
});

//Route to add schools
router.post("/schools", (req, res) => {
  const {
    name,
    address,
    description,
    email,
    site,
    phone,
    schoolType,
    geo,
  } = req.body;
  School.create({
    name,
    address,
    description,
    email,
    site,
    phone,
    schoolType,
    geo,
  }).then((response) => {
    res.json(response);
  });
});

//Route to find by id
router.get("/schools/:id", (req, res) => {
  School.findById(req.params.id).then((theSchoolFromDB) => {
    res.json(theSchoolFromDB);
  });
});

router.get("/allschools", (req, res) => {
  School.find().then((allSchools) => {
    res.json(allSchools);
  });
});

// router.get("/schools/details/:id", (req, res) => {
//   console.log("loggeduser", req.user);
//   School.findById(req.params.id).then((allSchoolsFromDB) => {
//     res.json(allSchoolsFromDB);
//   });
// });

// Route to update the school
router.put("/schools/:id", (req, res) => {
  const schoolId = req.params.id;
  const schoolWithNewDetails = req.body;
  School.findByIdAndUpdate(schoolId, schoolWithNewDetails).then(() => {
    res.json({ message: `Schools with ${req.params.id} was updated` });
  });
});
// Route to delete
router.post("/schools/:id", (req, res) => {
  let schoolId = req.params.id;
  let userId = req.body.userId;

  School.findById(schoolId)
    .then((school) => {
      let schoolName = school.name;

      return User.findByIdAndUpdate(userId, {
        $pull: { favorites: { $in: schoolName } },
      });
    })
    .then((user) => {
      res.json({ message: `School with id ${req.params.id} was deleted` });
    });
});
// router.delete("/schools/:id", (req, res) => {
//   School.findByIdAndRemove(req.params.id).then(() => {
//     res.json({ message: `School with id ${req.params.id} was deleted` });
//   });
// });
module.exports = router;
