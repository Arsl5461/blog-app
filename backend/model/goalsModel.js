const { timeStamp } = require('console')
const mongoose=require('mongoose')

const goalSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
name:{
    type:String,
    required:true,
},
    
    text:{
        type:String,
        required:[true,"Title is required"]
    },
},
{
timestamps:true,
})

module.exports=mongoose.model('Goals',goalSchema)