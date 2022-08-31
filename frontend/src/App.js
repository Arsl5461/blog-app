
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Navbar from "./components/Navbar"
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from "./pages/Home"

function App() {
  return (
<>
<div className='container'>
<Router>
<Navbar/>
  <Routes>
    <Route exact path="/" element={<Dashboard/>}></Route>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/register" element={<Register/>}></Route>
    <Route path="/login" element={<Login/>}></Route>

  </Routes>
</Router>
<ToastContainer/>
</div>
</>   
  );
}

export default App;
