const express = require("express");
const router = express.Router();
const Task = require("../model/Task");

router.post("/create", async (req, res) => {
  try {
    let sucess = false;
    task = await Task.create({
      img: req.body.img,
      title: req.body.title,
      content: req.body.content,
      heading: req.body.heading,
    });
    success = true;
    res.json({ success });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error Occured");
  }
}); //create

router.get("/read", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json({ tasks });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error Occured");
  }
}); //read

router.put("/update/:id", async (req, res) => {
  const { img, title, content, heading } = req.body;

  try {
    const newTask = {};
    if (img) {
      newTask.img = img;
    }
    if (title) {
      newTask.title = title;
    }
    if (content) {
      newTask.content = content;
    }
    if (heading) {
      newTask.heading = heading;
    }
    const task = await Task.findById(req.params.id);
    if (!task) {
      res.status(400).send("No Details Available");
    }
    utask = await Task.findByIdAndUpdate(
      req.params.id,
      { $set: newTask },
      { new: true }
    );
    res.json({ Success: `Successfully Updated ${req.params.id}`, utask });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error Occured");
  }
}); //update

router.delete("/delete/:id", async (req, res) => {
  try {
    let task = await Task.findById(req.params.id);
    if (!task) {
      res.status(400).send("No Details Available");
    }
    dtask = await Task.findByIdAndDelete(req.params.id);
    res.json({ Success: `Successfully Deleted ${req.params.id}`, dtask });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error Occured");
  }
}); //delete

module.exports = router;
