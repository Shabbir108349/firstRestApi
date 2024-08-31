const model = require('../Model/Schema')

const getAllController = (req, res, next)=>{
    model.find()
    .then(data =>{
        res.json({data})
    })
    .catch(error =>{
        console.log(error)
    })
}


const postAllController = (req,res,next) =>{
    const SchemaModel = new model({
        name : req.body.name,
        email : req.body.email
    })
    SchemaModel.save()
    .then(data =>{
        res.json({data})
    })
    .catch(error =>{
        console.log(error)
    })
}

const putAllController = (req,res,next)=>{
    let id = req.params.id
    model.findByIdAndUpdate(id,{$set:{
        name : req.body.name,
        email : req.body.email
    }})
    .then(data =>{
        model.findById(data._id)
        .then(newdata =>{
            res.json({newdata})
        })
    })
    .catch(error =>{
        console.log(error)
    })
}

module.exports = {
    getAllController,
    postAllController,
    putAllController
}