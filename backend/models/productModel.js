const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  size: { type: String, required: true },
  amountPerBox: { type: String, required: true },
  category: { type: String, required: true },
  storeLocation: [{ type: String }],
  itemImage: { type: String },
});

module.exports = mongoose.model('Product', productSchema);
