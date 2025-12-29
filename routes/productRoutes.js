const express = require("express");
const router = express.Router();

const {
  createProduct,
  addSellerPrice,
  getProducts,
  searchProducts,
} = require("../controllers/productController");

router.post("/create", createProduct);
router.post("/:productId/add-price", addSellerPrice);
router.get("/", getProducts);

// 🔍 SEARCH ROUTE
router.get("/search", searchProducts);

module.exports = router;

// ☠️add new 
const { protect, sellerOnly } = require("../middleware/authMiddleware");

router.post(
  "/:productId/add-price",
  protect,
  sellerOnly,
  addSellerPrice
);
