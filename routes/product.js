const express = require('express');
const { addProduct, getAllProducts, updateProduct, deleteProduct, getFeaturedProducts, getProductsByPrice, getProductsByRating } = require('../controllers/productController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.post('/add',authMiddleware, addProduct);
router.get('/',authMiddleware, getAllProducts);
router.put('/:id',authMiddleware, updateProduct);
router.delete('/:id',authMiddleware, deleteProduct);
router.get('/featured',authMiddleware, getFeaturedProducts);
router.get('/price/:price',authMiddleware, getProductsByPrice);
router.get('/rating/:rating',authMiddleware, getProductsByRating);

module.exports = router;
