const express=require('express')
const router=express.Router()
const postModel=require('../models/postModel')


router.get('/',async(req,res)=>{
try{

    const getAllPost=await postModel.find()
    res.status(200).json({
        getAllPost
    })
}catch(error){
res.status(404).json({message:error.message})
}

})

router.get('/:id',async(req,res)=>{
    try{
    const id=req.params.id
        const getSinglePost=await postModel.findById(id)
        res.status(200).json({
            getSinglePost
        })
    }catch(error){
    res.status(404).json({message:error.message})
    }
    
    })

    // post Route
    router.post('/',async(req,res)=>{
        try{
        
            const createPost=new postModel({
                title:req.body.title,
                content:req.body.content,
                category:req.body.category,
                author:req.body.author,
                image:req.body.image
                

            })
           const post= await createPost.save()
           res.status(201).json(post)
          
        }catch(error){
        res.status(404).json({message:error.message})
        }
        
        })

        // update route
        router.put('/:id',async(req,res)=>{
            try{
                const id=req.params.id
                const post = await postModel.findByIdAndUpdate(
                    
                        id,{
          
                            title :req.body.title||title,
                            content : req.body.content||content,
                            category : req.body.category||category,
                            author : req.body.author||author,
                            image : req.body.image||image,
                          updatedAt : Date.now(),
                               
                        },
                        {new:true}
                        
              
                );
             
        
                // post.title = req.body.title||post.title;
                // post.content = req.body.content||post.content;
                // post.category = req.body.category||post.category;
                // post.author = req.body.author||post.author;
                // post.image = req.body.image||spost.image;
                // post.updatedAt = Date.now();
        
                // const updatedPost = await post.save();
                res.json(post);
             
              
            }catch(error){
            res.status(404).json({message:error.message})
            }
            
            })
    
// delete route
router.delete('/:id',async(req,res)=>{
    try{
    const deletePost=await postModel.findByIdAndDelete(req.params.id)

res.status(200).json({message:'item deleted succesfully'})
     
      
    }catch(error){
    res.status(500).json({message:error.message})
    }
    
    })


    module.exports=router

    