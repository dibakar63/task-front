import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link,useParams } from 'react-router-dom'

//import Delete from './Delete'


const Profile = () => {
    const [data,setData]=useState([])
   
    
    

    
    
  //  const id=useParams().id
  const fetchHandler=async()=>{
   return  await axios.get('https://task-back-3v66.onrender.com/api/v1/get')
    .then((res)=>res.data);

  }
  useEffect(()=>{
    fetchHandler().then((data)=>setData(data.users));
    
    
  },[])
  
  
  
  return (
    <div className='main-profile'>
    
     <h1>Student Details</h1>
    <div className='data'>
      {data.map(({_id,name,contact,address})=>(
     
     <div className='card_2' key={_id}>
          <h3>Name:{name}</h3>
          
          <h3>Contact:{contact}</h3>
          <h3>Address:{address}</h3>
          
          </div>

        
          
   ))}
   </div>
    </div>
  )
}

export default Profile
