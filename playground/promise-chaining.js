require("../src/db/mongoose");
const User = require("../src/models/user");

// ObjectId("61efe5164c8e0675212c0b9e")

// User.findByIdAndUpdate("61efe274b1efac3fcc55d375", { age: 21 })
//   .then(user => {
//     console.log(user);
//     return User.countDocuments({ age: 21 });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(e => {
//     console.log(e);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

// const deleteTaskCount = async (id, age) => {
//   const user = await User.findByIdAndDelete(id);
//   const count = await User.countDocuments({ age });
// };

updateAgeAndCount("61efe274b1efac3fcc55d375", 2).then(count => {
  console.log(count);
});

deleteTaskCount("61efe274b1efac3fcc55d375", 2).then(count => {
  console.log(count);
});
