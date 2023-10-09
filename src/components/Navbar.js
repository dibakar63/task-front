import React from 'react'

import axios from 'axios'
import { useAuth } from './context/authContext'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const Navbar = () => {
   
  const [auth,setAuth]=useAuth()
  //const navigate=useNavigate()
  const handleClick=()=>{
    setAuth({
      ...auth,
      user:null,
      token:""

    })
    localStorage.removeItem("auth")
    toast.success("Logout successfully")
    
  }
  
  return (
    <div className='Navbar'>
    
    {!auth.user ?
      <>   <li className="nav-item" style={{textDecoration:"none"}}>
          <Link style={{color:"white",textDecoration:"none"}} className="nav-link"  to="/register">Register</Link>
        </li>
        <li className="nav-item">
          <Link style={{color:"white",textDecoration:"none"}} className="nav-link"  to="/login">Login</Link>
        </li>
        </> :<>
        <li className="nav-item">
          <p style={{paddingBottom:"20px"}}>Logged in as {auth.user.email}</p>
        </li> 
        <li className="nav-item">
          <Link style={{color:"white",textDecoration:"none"}} className="nav-link" onClick={handleClick}  to="/login">Logout</Link>
        </li></>
        

    }   
    </div>
  )
}

export default Navbar