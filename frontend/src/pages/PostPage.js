import axios from "axios"
import { useEffect, useState } from "react"
import swal from 'sweetalert';
export function PostPage(){
    const [danger,setDanger]=useState(null)
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");
    const [cataogry,setCataogry]=useState("");
    const [auother,setAuother]=useState("");
    const [image,setImage]=useState("");



    const onDanger=()=>{
        setDanger(1)
    }

    const cancel=()=>{
        setDanger(null)
    }

    const submit=async()=>{
        if(title.trim() && content.trim() && cataogry.trim() && auother.trim() && image.trim() )
          {await axios.post('http://localhost:8000/api/v1/post', {
              title: title,
              content: content,
              category:cataogry,
              author:auother,
              image:image
            })
            .then(function (response) {
              alert("successfully posted")
              swal("success", "successfully posted", "success");
              setDanger(null)

            })
            .catch(function (error) {
              console.log(error);
            })};

          if(!title){
              setTitle(1)
          }
          if(!content){
              setContent(1)
          }
          if(!cataogry){
              setCataogry(1)
          }
          if(!auother){
              setAuother(1)
          }
          if(!image){
              setImage(1)
          }

          

      }
    return<>
    <div className="container mt-5">
    <h1 className="">Post</h1>
    <span className="fw-bold">Create a new post</span>
    <div className="d-flex justify-content-center mt-3">
    <i onClick={onDanger} className="fa-regular fa-square-plus link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" style={{fontSize:"200px",cursor:"pointer"}}></i>
    </div>
    <div>
        <h3>Post Rules</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, quam porro a, provident atque veritatis dolorum autem temporibus laborum labore et quae impedit. Autem, neque animi distinctio facere repellendus expedita fugiat eveniet doloribus, aspernatur molestiae tempora mollitia. Molestiae quam quis quisquam modi dolor voluptatum voluptate possimus facere nostrum beatae laudantium ea adipisci blanditiis, facilis nulla qui veniam quia ullam iusto aliquam. Ex nihil tempore, a eaque voluptates optio reprehenderit quam quos amet nostrum eligendi, velit omnis. Delectus maiores laboriosam et voluptatum nisi quis voluptates commodi consequuntur dolorum quae in at maxime, quod aut est. Fugit labore consectetur earum quos pariatur?</p>
    </div>
    </div>
    {/* ............. */}
    {/* {!danger && <button onClick={onDanger} className="btn bg-danger text-light">submit</button>} */}
    {/* lllllllll */}
   {danger && <div className="bg-black position-absolute bg-opacity-75 top-0 start-0 d-flex align-items-center justify-content-center" style={{height:"100%",width:"100%"}}>
    <div className="bg-warning rounded-4 d-flex align-items-center" style={{minHeight:"300px",width:"300px",padding:"20px"}}>
        <div>
            <input type="text" onChange={(e)=>setTitle(e.target.value)} placeholder="title" style={{width:"250px",height:"40px",border:"none",borderRadius:"5px",outline:"none"}} className="my-2"/>
            {/* ......... */}
            {title==1 && <span className="text-danger">*title is not required</span>}
             {/* ......... */}
             <textarea type="text" onChange={(e)=>setContent(e.target.value)} placeholder="content" style={{width:"250px",height:"40px",border:"none",borderRadius:"5px",outline:"none"}} className="my-2"></textarea>
            {/* <input /> */}
              {/* ......... */}
              {content==1 && <span className="text-danger">*content is not required</span>}
             {/* ......... */}
            <input type="text" onChange={(e)=>setCataogry(e.target.value)} placeholder="cataogry" style={{width:"250px",height:"40px",border:"none",borderRadius:"5px",outline:"none"}} className="my-2"/>
              {/* ......... */}
              {cataogry==1 && <span className="text-danger">*cataogry is not required</span>}
             {/* ......... */}
            <input type="text" onChange={(e)=>setAuother(e.target.value)} placeholder="auother" style={{width:"250px",height:"40px",border:"none",borderRadius:"5px",outline:"none"}} className="my-2"/>
              {/* ......... */}
              {auother==1 && <span className="text-danger">*auother is not required</span>}
             {/* ......... */}
            <input type="text" onChange={(e)=>setImage(e.target.value)} placeholder="image" style={{width:"250px",height:"40px",border:"none",borderRadius:"5px",outline:"none"}} className="my-2"/>
              {/* ......... */}
              {image==1 && <span className="text-danger">*image is not required</span>}
             {/* ......... */}
            <div className="d-flex justify-content-between mt-3">
            <button onClick={submit} className="btn bg-success text-light">Submit</button>
                <button onClick={cancel} className="btn bg-danger text-light">cancel</button>
            </div>
            </div>
            
       

    </div>
    </div>}
      {/* lllllllll */}
    </>
}