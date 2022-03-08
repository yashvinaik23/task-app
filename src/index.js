const express = require("express");
const { Model } = require("mongoose");
require("./db/mongoose");
// const User = require("./models/user");
// const tasks = require("./models/task");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("Get request are disable");
//   } else {
//     next();
//   }
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// app.post("/users", (req, res) => {
//   const user = new User(req.body);
//   //console.log(req.body);
//   user
//     .save()
//     .then(() => {
//       res.status(201).send(user);
//     })
//     .catch(e => {
//       res.status(400).send(e);
//     });
// });

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

const tasks = require("./models/task");
const User = require("./models/user");

const main = async () => {
  // const task = await tasks.findById("61f923af8b1177dda13ed5d9");
  // await task.populate("owner"); //.execPopulate();
  // console.log(task.owner);
  const user = await User.findById("61f92223aec1233dd7138113");
  await user.populate("tasks"); //.execPopulate();
  console.log(user.tasks);
};

main();
// const bcrypt = require("bcryptjs");

// const myFunction = async () => {
//   const password = "Red12345!";
//   const hashedPassword = await bcrypt.hash(password, 8);
//   console.log(password);
//   console.log(hashedPassword);

//   const isMatch = await bcrypt.compare("Red12345!", hashedPassword);
//   console.log(isMatch);
// };

const jwt = require("jsonwebtoken");
const myFunction = async () => {
  const token = jwt.sign({ _id: "abc123" }, "thisismynewcourse", {
    expiresIn: "7 days",
  });
  console.log(token);

  const data = jwt.verify(token, "thisismynewcourse");
  console.log(data);
};

myFunction();
