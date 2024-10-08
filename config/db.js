const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/dbName1");
const db = mongoose.connection;
db.on("connected", () => {
  console.log("Mongoose connected " );
});

db.on("error", (err) => {
  console.log("Mongoose connection error: " + err);
});

db.on("disconnected", () => {
  console.log("Mongoose disconnected");
});
