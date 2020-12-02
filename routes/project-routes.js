const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { response } = require("../app");
const Project = require("../models/project-model");

//Route to retrieve all projects
router.get("/projects", (req, res) => {
  console.log("loggeduser", req.user);
  Project.find().then((allProjectsFromDB) => {
    res.json(allProjectsFromDB);
  });
});
//Route to add projects
router.post("/projects", (req, res) => {
  const { title, description } = req.body;
  Project.create({
    title,
    description,
  }).then((response) => {
    res.json(response);
  });
});
//Route to find by id
router.get("/projects/:id", (req, res) => {
  Project.findById(req.params.id).then((theProjectFromDB) => {
    res.json(theProjectFromDB);
  });
});
// Route to update the project
router.put("/projects/:id", (req, res) => {
  const projectId = req.params.id;
  const projectWithNewDetails = req.body;
  Project.findByIdAndUpdate(projectId, projectWithNewDetails).then(() => {
    res.json({ message: `Projects with ${req.params.id} was updated` });
  });
});
// Route to delete
router.delete("/projects/:id", (req, res) => {
  Project.findByIdAndRemove(req.params.id).then(() => {
    res.json({ message: `Project with id ${req.params.id} was deleted` });
  });
});
module.exports = router;
