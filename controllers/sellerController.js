const Seller = require("../models/Seller");

exports.createSeller = async (req, res) => {
  try {
    const seller = await Seller.create(req.body);
    res.status(201).json(seller);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
