require('dotenv').config()
const express = require('express')
const { notFound, errorHandler } = require('./middlewares/error.middleware')
const router = require('./routes/data.route')
const app = express()

//In-Built app level middlewares for receiving data from client
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//router-level middleware for handling all the routes
app.use(router)

//Middlewares handling notFound route and errors
app.all('*', notFound)
app.use(errorHandler)

//port for listening to the server
const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}....`)
})



