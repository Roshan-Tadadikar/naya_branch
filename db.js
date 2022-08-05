const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect(
    "mongodb+srv://abdullah:18ce39@cluster0.qbmv0.mongodb.net/carEzyrental",
    { useUnifiedTopology: true, useNewUrlParser: true }
  );

  const connection = mongoose.connection;

  connection.on("connected", () => {
    console.log("Mongo DB Connection Successfull");
  });

  connection.on("error", () => {
    console.log("Mongo DB Connection Error");
  });
}

connectDB();

module.exports = mongoose;
