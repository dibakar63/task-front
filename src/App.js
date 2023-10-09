import logo from './logo.svg';
import './App.css';
import {Router,Routes,Route} from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import AddDetails from './components/AddDetails';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css'
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Toaster/>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/' element={<AddDetails/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
