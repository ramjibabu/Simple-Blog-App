const mongoose=require('mongoose')

const postSchema=new mongoose.Schema({

    title: { type: String, required: true},
    content: { type: String, required: true},
    category: { 
        type: String, 
        required: true
    },
    author: { type: String, required: true},
    image: { type: String},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

const postModel=mongoose.model('post',postSchema)
module.exports=postModel