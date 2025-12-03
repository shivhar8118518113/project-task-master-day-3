require('dotenv').config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

// Routes import
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Routes
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

// Server start
app.listen(5000, () => console.log("Server running on port 5000"));

