const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8000;

const video = require("./routes/video.js");
const login = require("./routes/login.js");
const register = require("./routes/register.js");
const users = require("./routes/users.js");

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Connected");
});

app.use("/api/video", video);
app.use("/api/user", register);
app.use("/api", users);
app.use("/api/user", login);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
