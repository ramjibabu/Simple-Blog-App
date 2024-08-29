import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export function Detail(){
    const [singleItem,setSingleItem]=useState(null)
    const {id}=useParams()
  
   
    
        // ?????????????????????

    const getSingleItem=async()=>{
        
        await axios('http://localhost:8000/api/v1/post/'+id)
        .then(function (response) {
            setSingleItem(response.data.getSinglePost)
            console.log(response.data.getSinglePost);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    useEffect(()=>{
getSingleItem()
    },[])

    if(!singleItem){
        return<p>loding...</p>
    }
    const formattedDate = Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: "numeric",
        year: "numeric"
    }).format(new Date(singleItem.createdAt))

    

   

        
        

   
    return<>
    
    <main class="container my-4">
        <div class="row">
            <article class="col-lg-8">
                <h2 class="blog-post-title">{singleItem.title}</h2>
                <p class="blog-post-meta">{formattedDate}<a href="#">{singleItem.author}</a></p>

                <img class="mb-3 img-fluid" src={singleItem.image} alt=""/>
                
                <div class="blog-post-content">
                    <p>{singleItem.content}</p>
                   
                </div>
            </article>

            <aside class="col-lg-4">
                <div class="p-4 bg-light">
                    <h3 class="mb-4">Related Posts</h3>

                    <div class="mb-4">
                        <div class="row align-items-center">
                            <div class="col-auto">
                                <img src="https://via.placeholder.com/100" class="img-fluid rounded" alt="Related Post Image"/>
                            </div>
                            <div class="col">
                                <h4><a href="#" class="text-decoration-none">Related Post Title 1</a></h4>
                                <p>Short description or excerpt of the related post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>

                    <div class="mb-4">
                        <div class="row align-items-center">
                            <div class="col-auto">
                                <img src="https://via.placeholder.com/100" class="img-fluid rounded" alt="Related Post Image"/>
                            </div>
                            <div class="col">
                                <h4><a href="#" class="text-decoration-none">Related Post Title 2</a></h4>
                                <p>Short description or excerpt of the related post. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    </main>
    
    </>
}