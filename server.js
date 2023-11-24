const dotenv = require('dotenv').config()
const express = require('express')
const db = require('./config/dbConnection')
const productRouter = require('./routes/productsRoute')

/**
 * CREATE EXPRESS APP
 */
const app = express()

/**
 * MIDDLEWARE 
 */

app.use(express.json())
app.use('/products',productRouter)

/**
 * LISTEN TO REQUESTS
 */
const PORT = process.env.PORT

app.listen(PORT , ()=>{
    console.log(`Server started running at port ${PORT}`)
})