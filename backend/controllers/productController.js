const Product = require('../models/productModel');

const getProductsByStore = async (req, res) => {
  const { storeId } = req.params;
  try {
    const products = await Product.find({ storeLocation: storeId });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = { getProductsByStore };
