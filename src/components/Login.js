import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useAuth } from './context/authContext'

const Login = () => {
  const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [auth,setAuth]=useAuth()

    const navigate=useNavigate()
    const handleSubmit=async(e)=>{
      e.preventDefault();
      try {
        const res=await  axios.post('https://task-back-3v66.onrender.com/api/v1/login',{email,password})
        if( res && res.data.success){
          toast.success(res.data.message)
          setAuth({
            ...auth,user:res.data.users,
            token:res.data.token
          })
          localStorage.setItem("auth",JSON.stringify(res.data))
          navigate('/')
          
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
        
        <h1 style={{marginTop:"40px",fontSize:"60px"}}>Welcome</h1>
        
            <input type='email' placeholder='username' style={{width:"300px",height:"35px",borderRadius:"15px",textAlign:"center"}}  value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            
            <input  type='password' style={{width:"300px",height:"35px",borderRadius:"15px",textAlign:"center"}} placeholder='password'  value={password} onChange={(e)=>setPassword(e.target.value)} required/>
            <div style={{marginTop:"20px"}} className='checkbox'>
                <input type='checkbox' style={{marginBottom:"18px"}}/><span>Remember? </span>
                <span style={{marginLeft:"115px"}}>Forgot Password?</span>
            </div>
            <Link to='/register' style={{color:"white",textDecoration:"none"}}>Register? Click here</Link>
            <button type='submit' style={{marginTop:"20px",width:"300px",height:"35px",borderRadius:"15px",backgroundColor:"green",font:"white",color:"white",fontSize:"20px",cursor:"pointer"}} onClick={handleSubmit}>Login</button>
            
        </div>
            
        </div>
        <div className='image'>
        
        <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_xlmz9xwm.json"     loop autoplay  ></lottie-player>
        
        
        </div>
      </div>
    </div>
  )
}

export default Login
