const asyncHandler = require('express-async-handler')
const db = require('../config/dbConnection')




const getProducts = asyncHandler(async(req,res)=>{

    const products = await db.any('SELECT * FROM get_all_products()');
    
    res.status(200).json({
        message: 'Successfully retrieved products',
        data: products,
    });

})

const updateProducts = asyncHandler(async (req, res) => {
    const { id, item_name, description, price, imageUrl } = req.body;

    try {
        await db.none('SELECT update_product($1, $2, $3, $4, $5)', [id, item_name, description, price, imageUrl]);

        res.status(200).json({
            message: 'Successfully updated product',
        });
    } catch (error) {
        console.error('Error updating product:', error.message || error);
        res.status(500).json({
            message: 'Internal Server Error',
        });
    }
});

const addProducts = asyncHandler(async(req,res)=>{

    const { item_name, description, price, imageUrl } = req.body;

    try {
        const result = await db.one('SELECT add_product($1, $2, $3, $4)', [item_name, description, price, imageUrl]);

        res.status(200).json({
            message: 'Successfully added product',
            result: result,
        });
    } catch (error) {
        console.error('Error adding product:', error.message || error);
        res.status(500).json({
            message: 'Internal Server Error',
        });
    }  
})

const deleteProducts = asyncHandler(async (req, res) => {
    const { id } = req.body;

    try {
        console.log('Attempting to delete product with ID:', id);

        await db.none('SELECT delete_product($1)', [id]);

        console.log('Successfully deleted product');

        res.status(200).json({
            message: 'Successfully deleted product',
        });
    } catch (error) {
        console.error('Error deleting product:', error.message || error);

        res.status(500).json({
            message: 'Internal Server Error',
        });
    }
});




module.exports ={
    getProducts,
    updateProducts,
    addProducts,
    deleteProducts
}