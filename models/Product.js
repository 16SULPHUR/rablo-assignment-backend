const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  featured: { type: Boolean, default: false },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    validate: {
      validator: function(value) {
        return value >= 0 && value <= 5;
      },
      message: 'Rating must be between 0 and 5'
    }
  },
  createdAt: { type: Date, required: true, default: Date() },
  company: { type: String, required: true }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
