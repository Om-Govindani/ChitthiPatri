const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/connectDB");
require("dotenv").config();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.json({
    message: `Server running at PORT : ${PORT}`,
  });
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at PORT : ${PORT}`);
  });
});
