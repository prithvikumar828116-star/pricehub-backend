const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addSellerPrice = async (req, res) => {
  try {
    const { sellerId, price, stock } = req.body;

    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.sellers.push({
      seller: sellerId,
      price,
      stock,
    });

    await product.save();
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProducts = async (req, res) => {
  const products = await Product.find().populate("sellers.seller");
  res.json(products);
};
// 
// ❤️ ADD new 
exports.searchProducts = async (req, res) => {
  try {
    const { name } = req.query;

    const products = await Product.find({
      name: { $regex: name, $options: "i" }, // case-insensitive search
    }).populate("sellers.seller");

    // sort sellers inside each product by lowest price
    const sortedProducts = products.map((product) => {
      product.sellers.sort((a, b) => a.price - b.price);
      return product;
    });

    res.json(sortedProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};