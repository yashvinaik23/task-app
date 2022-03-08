const mongoose = require("mongoose");
const validator = require("validator");

const tasks = mongoose.model("tasks", {
  description: { type: String, trim: true, required: true },
  complete: { type: Boolean, default: false },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

// const task = new tasks({ description: "Finish fast      " });
// task
//   .save()
//   .then(task => {
//     //console.log(task);
//   })
//   .catch(error => {
//     //console.log("Error: ", error);
//   });

module.exports = tasks;
