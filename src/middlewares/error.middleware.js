exports.notFound =  (req,res, next)=>{
    try {
        const err = new Error(`Route not found! Kindly try again with a valid route`)
        err.status = 404
        next(err)
    } catch (err) {
       console.log(err.message)
    }
    
}


exports.errorHandler = (err, req, res, next)=>{
    res.status(err.status || 500).json({msg: err.message || `Unkown error`})
}