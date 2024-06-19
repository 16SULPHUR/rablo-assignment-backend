const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const productRoutes = require("./routes/product");
const userRoutes = require("./routes/user");
const cors = require("cors")

app.use(cors())

const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed", error);
  }
};

connectDB();

app.use(express.json());

app.use("/api/products", productRoutes);
app.use('/api', userRoutes);

app.get("/", (req, res) => {
  res.json({ msg: "HELLO ITS WORKING" });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Running at: http://127.0.0.1:${PORT}`);
});
