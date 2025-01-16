const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const storeSchema = new mongoose.Schema({
  storeName: { type: String, required: true },
  storeId: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

storeSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

storeSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('Store', storeSchema);
