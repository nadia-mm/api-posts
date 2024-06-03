require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = express.Router();
const postRoutes = require("./src/routes/posts")(router);

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/v1/posts", postRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Successfully connected to the database!");
  });
});
