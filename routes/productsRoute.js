const express = require('express')
const { getProducts, addProducts, updateProducts, deleteProducts } = require('../controllers/productsController')
const router = express.Router()

/**
 * REST FUNCTIONS
 */

// GET products
router.route('/').get(getProducts)

// POST products
router.route('/').post(addProducts)

// UPDATE/PUT Product
router.route('/').put(updateProducts)

// DELETE Product
router.route('/').delete(deleteProducts)

module.exports = router