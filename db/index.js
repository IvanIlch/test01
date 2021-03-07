const mongoose = require("mongoose");
require("dotenv").config();

const uriDb = process.env.URI_DB;

const db = mongoose.connect(uriDb, {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

mongoose.connection.on("connected", () => {
  console.log(`Mongoose connected`);
});
mongoose.connection.on("error", (err) => {
  console.log(`Has error, message: ${err}`);
});
mongoose.connection.on("disconnected", () => {
  console.log(`Mongoose was disconnected`);
});

process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log("Connection was close");
    process.exit(1);
  });
});

module.exports = db;
