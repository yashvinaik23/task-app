// const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
//   // useNewUrlParser: true,
//   // useCreateIndex: true,
// });

// const me = new User({
//   name: "   Yashvi    ",
//   email: "yash@gmail.com     ",
//   password: "phone098",
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch(error => {
//     console.log("Error : ", error);
//   });

// const tasks = mongoose.model("tasks", {
//   description: { type: String, trim: true, required: true },
//   complete: { type: Boolean, default: false },
// });

// const task = new tasks({ description: "Finish fast      " });
// task
//   .save()
//   .then(task => {
//     console.log(task);
//   })
//   .catch(error => {
//     console.log("Error: ", error);
//   });

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  // useNewUrlParser: true,
  // useCreateIndex: true,
});

// const Task = mongoose.model("Task", {
//   description: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   completed: {
//     type: Boolean,
//     default: false,
//   },
// });
