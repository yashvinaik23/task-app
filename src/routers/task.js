const tasks = require("../models/task");
const express = require("express");
const auth = require("../middleware/auth");
const router = new express.Router();

router.patch("/tasks/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["description", "complete"];
  const isValidOperation = updates.every(update => {
    return allowedUpdates.includes(update);
  });

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid ipdates!" });
  }
  try {
    const task = await tasks.findById(req.params.id);
    updates.forEach(update => (task[update] = req.body[update]));
    await task.save();
    // const task = await tasks.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true,
    //   runValidators: true,
    // });
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await tasks.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/tasks", async (req, res) => {
  try {
    const task = await tasks.find({});
    res.send(task);
  } catch (e) {
    res.status(500).send();
  }
  // tasks
  //   .find({})
  //   .then(tasks => {
  //     res.send(tasks);
  //   })
  //   .catch(e => {
  //     res.status(500).send();
  //   });
});

router.get("/tasks/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await tasks.findById(_id);
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (e) {
    res.status(500).send();
  }
});
// const _id = req.params.id;
// tasks
//   .findById(_id)
//   .then(task => {
//     if (!task) {
//       return res.status(404).send();
//     }
//     res.send(task);
//   })
//   .catch(e => {
//     res.status(500).send();
//   });

router.post("/tasks", auth, async (req, res) => {
  //const task = new tasks(req.body);
  const task = new tasks({
    ...req.body,
    owner: req.user._id,
  });
  //console.log(req.body);
  try {
    await task.save();
    res.status(201).send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
