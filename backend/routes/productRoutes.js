const express = require('express');
const { getProductsByStore } = require('../controllers/productController');
const router = express.Router();

router.get('/:storeId', getProductsByStore);

module.exports = router;
