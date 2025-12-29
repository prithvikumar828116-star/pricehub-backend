const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("🔥 PriceHub Backend is Running");
});

// 🔗 ADD THESE LINES (THIS IS WHAT YOU ASKED)
app.use("/api/sellers", require("./routes/sellerRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));


// server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 PriceHub Server running on port ${PORT}`);
});
