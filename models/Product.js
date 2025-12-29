const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    brand: String,
    category: String,
    sellers: [
      {
        seller: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Seller",
        },
        price: Number,
        stock: Number,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
