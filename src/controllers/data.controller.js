let {data}  = require('../data')



const getData = async (req, res, next)=>{
   try { 
    res.status(200).json({msg: `Data fetched successfully`, data})
   } catch (err) {
    next(err)
   }
}

const getDataById = async (req, res, next)=>{
  const {id} = req.params
  try{
    const dataById = data.find((el) => el.id === parseInt(id))
    if(!dataById){
      return res.status(404).json({msg: `Sorry, there is no data with the id ${id} you supplied. Try again with a valid id`})
    }
    res.status(200).json({msg: `Data fetched successfully`, data: dataById})
  }
 catch (err) {
   next(err)
  }
}

const createData = async (req, res, next)=>{
  try {
    if(!Object.keys(req.body).length){  
      return res.status(400).json({msg: `The field(s) can not be empty. Kindly input data!`})
    }
    data.push({id: (data.length + 1), ...req.body})
    res.status(201).json({msg: `Data created successfully`})

  } catch (err) {
    next(err)
  }
}

const updateData = async(req,res,next)=>{
  const {id} = req.params
  try{
    if(!Object.keys(req.body).length){
      return res.status(400).json({msg: `The field(s) can not be empty. Kindly input data!`})
    }
    const dataToUpdate = data.find((el) => el.id === parseInt(id))
    if(!dataToUpdate){
      return res.status(404).json({msg: `Sorry, there is no data with the id ${id} you supplied. Try again with a valid id`})
      }
      for(key in req.body){
        dataToUpdate[key] = req.body[key];
    }
  res.status(200).json({msg: `Data with the id ${id} has been updated successfully`})
      
  }catch(err){
      
      next(err)
  }

}


const deleteData = async(req,res,next)=>{
  const {id} = req.params
  try{
    data = data.filter((el) => el.id !== parseInt(id))
    res.status(200).json({msg: `Your data with id ${id} has been deleted successfully`})
  }

  catch(err){
      next(err)

  }

  
}




module.exports = {
    getData,
    getDataById,
    createData,
    updateData,
    deleteData
}