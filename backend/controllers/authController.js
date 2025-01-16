const Store = require('../models/storeModel');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const { storeId, password } = req.body;
  try {
    const store = await Store.findOne({ storeId });
    if (store && (await store.matchPassword(password))) {
      const token = jwt.sign({ id: store._id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
      });
      res.status(200).json({ token, storeName: store.storeName });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = { login };
