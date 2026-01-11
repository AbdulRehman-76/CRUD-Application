const express = require("express");
const connectDB = require("./db");
const userRoutes = require("./routes/userRoutes");

const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());  
connectDB();
app.use("/api", userRoutes);

module.exports = app;
