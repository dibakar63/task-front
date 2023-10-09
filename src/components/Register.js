import React ,{useState}from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Register = () => {
  const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
          const res=await  axios.post('https://task-back-3v66.onrender.com/api/v1/register',{email,password})
          
          if( res && res.data.success){
            toast.success("Successfully registered")
            navigate('/login')
          }else{
            toast.error(res.data.message)
          }
        } catch (error) {
          if(password.length<6){
            toast.error("Password length must be more than 6")
          }
            console.log(error);
            toast.error('Something went wrong')
        }
    }
  return (
    <div className='main'>
      <div className='container'>
        <div className='login'>
        <div className='card'>
        <h1 style={{marginTop:"40px",fontSize:"60px"}}>Register</h1>
            
            <input type='email' placeholder='username' style={{width:"300px",height:"35px",borderRadius:"15px",textAlign:"center"}} value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            
            <input  type='password' style={{width:"300px",height:"35px",borderRadius:"15px",textAlign:"center"}} placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
            <div style={{marginTop:"20px"}} className='checkbox'>
                <input type='checkbox' style={{marginBottom:"18px"}}/><span>Remember? </span>
                <span style={{marginLeft:"115px"}}>Forgot Password?</span>
            </div>
            <button type='submit' style={{marginTop:"20px",width:"300px",height:"35px",borderRadius:"15px",backgroundColor:"green",font:"white",color:"white",fontSize:"20px"}} onClick={handleSubmit}>Register</button>
            
        </div>
            
        </div>
        <div className='image'>
        
        <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_xlmz9xwm.json"     loop autoplay  ></lottie-player>
        
        
        </div>
      </div>
    </div>
  )
}

export default Register
