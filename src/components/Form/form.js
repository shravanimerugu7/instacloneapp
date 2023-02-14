import {React,useState} from 'react';
import {useNavigate } from "react-router-dom";
import './form.css';
import axios from "axios";
import Navbar from '../nav';


const Form =()=>{
    const postdate= new Date();
    const navigate = useNavigate();
    const u_date=`${postdate.getDate()}/${postdate.getMonth()+1}/${postdate.getFullYear()}`
    const[post,setPost]=useState({
      name:"",
      location:"",
      likes:"0",
      description:"",
      PostImage:"",
      date:""});
    const [image,setImage]=useState('');
    const handlesubmit= async (e)=>{
        e.preventDefault();
        setPost({...post,date:u_date})
        const data= new FormData();
        data.append("file",image);
        data.append("upload_preset","igjhozt8");
        data.append("cloud_name","drbri3zi3");
        await fetch("https://api.cloudinary.com/v1_1/drbri3zi3/image/upload",{
            method:"POST",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
            const newpost={
                name:post.name,
                location:post.location,
                likes:post.likes,
                description:post.description,
                PostImage:data.url,
                date:u_date
            }
             axios.post('http://localhost:8080/posts',newpost)
             console.log(newpost);
            })
        .catch(err=>console.log(err))
            navigate("/post")
      }
    return(
        <>
         <Navbar/>
        <form>
            <div className='form1'>
                <input type="file" id="file" name="file" onChange={(event)=>{setImage(event.target.files[0])}}/>
                <br></br>
                <input type="text"  id='author' placeholder='Author' onChange={(event)=>{setPost({...post,name:event.target.value})}}/>
                <br></br>
                <input type="text"  id="location" placeholder='Location' onChange={(event)=>{setPost({...post,location:event.target.value})}}/>
                <br></br>
                <input type="text" id="description" placeholder='Description' onChange={(event)=>{setPost({...post,description:event.target.value})}}/>
                <br></br>
                <button className='btn' onClick={handlesubmit}>Post</button>
              </div>
           
        </form>
        </>
    )
}

export default Form
