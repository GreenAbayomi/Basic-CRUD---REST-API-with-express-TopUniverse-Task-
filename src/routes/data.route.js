const express = require('express')
const { getData, createData, updateData, deleteData, getDataById } = require('../controllers/data.controller')
const router = express.Router()

//routes to read data
router.get('/getdata', getData)
router.get('/getdata/:id', getDataById)

//route to create data
router.post('/createdata', createData)

//route to update data
router.put('/updatedata/:id', updateData)

//route to delete data
router.delete('/deletedata/:id', deleteData)







module.exports = router