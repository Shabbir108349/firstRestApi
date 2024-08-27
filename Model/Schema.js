const mongoose = require('mongoose')


const schema = mongoose.Schema({
    name :{
        type : String,
        required: true
    },
    email :{
        type : String,
        required : true
    }
})


const modelSchema = mongoose.model('Children',schema)



module.exports = modelSchema