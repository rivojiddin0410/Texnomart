import './App.css';
import Navbar from './components/navbar/Navbar';
import {HiOutlineSun} from "react-icons/hi"
import {BsFillMoonStarsFill} from "react-icons/bs"
import { useState } from 'react';
function App() {
  const [thems, setThems] = useState(false)
  return (
    <div style={{}}
    className={`app ${thems ? "dark" : ""}`}>

      <Navbar/>
<button style={{width: "100px", height: "25px", background: "#ddd", color:"#222", border: "1px solid black"}}onClick={()=> setThems(!thems)}>{thems ? <BsFillMoonStarsFill/> : <HiOutlineSun/>  }</button>
    </div>
  );
}

export default App;
