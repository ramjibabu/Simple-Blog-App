import {useState, useEffect } from 'react'
import axios from 'axios'
import { Item } from '../components/postItem';
export function Home(){

    const [post,setPost] = useState([])
    const postRoute=async()=>{
        await axios.get('http://localhost:8000/api/v1/post')
  .then(function (response) {
	setPost(response.data.getAllPost)
    console.log(response.data.getAllPost);
  })
  .catch(function (error) {
    console.log(error);
  });
    }

	useEffect(()=>{
		postRoute()

	},[])

    return (<>
    
   

	<main>
		<div className="container mt-4">
			<div className="row">
				
				<div className="col-lg-8">
					<h1 className="mb-4">Latest Posts</h1>

				{post.map((blog)=><Item blog={blog}/>)}

					

				</div>
			
				<div className="col-lg-4">
					<div className="card mb-4">
						<div className="card-body">
							<h5 className="card-title">About Me</h5>
							<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</div>
					</div>

					<div className="card mb-4">
						<div className="card-body">
							<h5 className="card-title">Categories</h5>
							<ul className="list-group">
								<li className="list-group-item"><a href="#" className="text-black">Category 1</a></li>
								<li className="list-group-item"><a href="#"  className="text-black">Category 2</a></li>
								<li className="list-group-item"><a href="#"  className="text-black">Category 3</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
            </div>
	</main>

	
    </>)
}