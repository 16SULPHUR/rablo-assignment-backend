const express = require('express');
const { addProduct, getAllProducts, updateProduct, deleteProduct, getFeaturedProducts, getProductsByPrice, getProductsByRating } = require('../controllers/productController');

const router = express.Router();

router.post('/add', addProduct);
router.get('/', getAllProducts);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.get('/featured', getFeaturedProducts);
router.get('/price/:price', getProductsByPrice);
router.get('/rating/:rating', getProductsByRating);

module.exports = router;
