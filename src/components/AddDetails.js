import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'


const AddDetails = () => {
    const [name,setName]=useState("");
    const [contact,setContact]=useState("");
    const [address,setAddress]=useState("");
    
    

    const navigate=useNavigate()
    const handleSubmit=async(e)=>{
      e.preventDefault();
      try {
        const res=await  axios.post('https://task-back-3v66.onrender.com/api/v1/add',{name,contact,address})
        if( res && res.data.success){
          toast.success(res.data.message)
          
          localStorage.getItem("auth",JSON.stringify(res.data))
          navigate('/profile')
          
        }else{
          toast.error(res.data.message)
        }
      } catch (error) {
          console.log(error);
          toast.error('Something went wrong')
      }
  }
  return (
    <div className='main'>
      <div className='container'>
        <div className='login'>
        <div className='card'>
        <h1 style={{marginTop:"40px",fontSize:"60px"}}>Student Details</h1>
            
           <input type='text' placeholder='Enter your name' style={{width:"300px",height:"35px",borderRadius:"15px",textAlign:"center"}} value={name} onChange={(e)=>setName(e.target.value)} required/>
           <input type='text' placeholder='Enter your mobile no' style={{width:"300px",height:"35px",borderRadius:"15px",textAlign:"center",marginTop:"20px"}} value={contact} onChange={(e)=>setContact(e.target.value)} required/>
           <textarea type='text' placeholder='Enter your address' rows="4" cols="50" style={{width:"300px",height:"75px",borderRadius:"15px",border:"none",textAlign:"center",marginTop:"20px"}} value={address} onChange={(e)=>setAddress(e.target.value)} required/>
            
           
            
            
            <button type='submit' style={{marginTop:"20px",width:"300px",height:"35px",borderRadius:"15px",backgroundColor:"green",font:"white",color:"white",fontSize:"20px",cursor:"pointer"}} onClick={handleSubmit}>Add</button>
            
        </div>
            
        </div>
        <div className='image'>
        
        <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_xlmz9xwm.json"     loop autoplay  ></lottie-player>
        
        
        </div>
      </div>
    </div>
  )
}

export default AddDetails
