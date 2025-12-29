const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema(
  {
    shopName: {
      type: String,
      required: true,
    },
    sellerType: {
      type: String,
      enum: ["online", "offline"],
      required: true,
    },
    location: String,
    phone: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Seller", sellerSchema);
