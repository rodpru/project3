const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { response } = require("../app");
const School = require("../models/school-model");

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
// Route to update the school
router.put("/schools/:id", (req, res) => {
  const schoolId = req.params.id;
  const schoolWithNewDetails = req.body;
  School.findByIdAndUpdate(schoolId, schoolWithNewDetails).then(() => {
    res.json({ message: `Schools with ${req.params.id} was updated` });
  });
});
// Route to delete
router.delete("/schools/:id", (req, res) => {
  School.findByIdAndRemove(req.params.id).then(() => {
    res.json({ message: `School with id ${req.params.id} was deleted` });
  });
});
module.exports = router;
