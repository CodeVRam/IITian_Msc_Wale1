import React from 'react'
import '../App.css';
import logo from "./Images/logo.jpg"
import { Link } from 'react-router-dom'
import Middle from './Middle';
const Navbar = () => {
  return (
    <>
    <ul className="nav justify-content-around align-items-center">
  <li className="nav-item">
   <img className=" logo rounded-circle" src={logo} alt="" />
  </li>
  <li className="nav-item">
    <a >
    <Link className="nav-link active" to="/">Home</Link>
    </a>
  </li>
  <li className="nav-item">

    <a>
     <Link className="nav-link drp1" to="/colleges">Colleges</Link>
     <ul className="list-group dropdown1">
       <li className="list-group-item" ><Link >IIT</Link></li>
       <li className="list-group-item"><Link >NIT</Link></li>
     </ul>
    </a>

  </li>
  
  <li className="nav-item">
    <a>
     <Link className="nav-link drp2" to="/exams">Exams</Link>
     <ul className="list-group dropdown2">
       <li className="list-group-item"><Link>GATE</Link></li>
       <li className="list-group-item"><Link>CSIR-NET</Link></li>
       <li className="list-group-item"><Link>IIT-JAM</Link></li>
       <li className="list-group-item"><Link>TIFR</Link></li>
       <li className="list-group-item"><Link>NIMCET</Link></li>
     </ul>
    </a>
  </li>

  <li className="nav-item">
   <a><Link className="nav-link active" to="/about">About</Link></a> 
  </li>
  
</ul>
<div class="marquee-w">
            <div class="marquee">
                <span>Now boost your IIT preparation with IITians -  IIT-JAM , GATE , TIFR , NIMCET <a  className="text-decoration-none " href="#">Click to know all Features and Benifits</a></span>
            </div>
            <div class="marquee marquee2">
                <span>Now boost your IIT preparation with IITians -  IIT-JAM , GATE , TIFR , NIMCET <a  className="text-decoration-none " href="#">Click to know all Features and Benifits</a></span>
            </div>
</div>
      <div>
         <Middle/>
      </div>
  </>
  )
}

export default Navbar
