//CRuD create read update delete

const { ObjectID } = require("bson");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";
const id = new ObjectID();
console.log(id);
const collection = "users";
console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);
    // db.collection(collection).insertOne(
    //   {
    //     name: "Yashvi",
    //     age: 21,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // db.collection(collection)
    //   .find({})
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    db.collection(collection)
      .find({})
      .forEach(user => console.log(user));
    // db.collection(collection).insertMany(
    //   [
    //     { name: "yash", age: 21 },
    //     { name: "naik", age: 21 },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert users");
    //     }
    //     console.log(result);
    //   }
    // );
  }
);

// // CRUD create read update delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;

// const connectionURL = "mongodb://127.0.0.1:27017";
// const databaseName = "task-manager";

// MongoClient.connect(
//   connectionURL,
//   { useNewUrlParser: true },
//   (error, client) => {
//     if (error) {
//       return console.log("Unable to connect to database!");
//     }

//     const db = client.db(databaseName);

//     // db.collection('users').insertOne({
//     //     name: 'Andrew',
//     //     age: 27
//     // }, (error, result) => {
//     //     if (error) {
//     //         return console.log('Unable to insert user')
//     //     }

//     //     console.log(result.ops)
//     // })

//     // db.collection('users').insertMany([
//     //     {
//     //         name: 'Jen',
//     //         age: 28
//     //     }, {
//     //         name: 'Gunther',
//     //         age: 27
//     //     }
//     // ], (error, result) => {
//     //     if (error) {
//     //         return console.log('Unable to insert documents!')
//     //     }

//     //     console.log(result.ops)
//     // })

//     db.collection("tasks").insertMany(
//       [
//         {
//           description: "Clean the house",
//           completed: true,
//         },
//         {
//           description: "Renew inspection",
//           completed: false,
//         },
//         {
//           description: "Pot plants",
//           completed: false,
//         },
//       ],
//       (error, result) => {
//         if (error) {
//           return console.log("Unable to insert tasks!");
//         }

//         console.log(result.ops);
//       }
//     );
//   }
// );
