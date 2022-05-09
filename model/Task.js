const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema({
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  heading: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Task = mongoose.model("task", TaskSchema);
module.exports = Task;
