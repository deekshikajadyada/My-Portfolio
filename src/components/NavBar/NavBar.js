import React from 'react'
import './NavBar.css'; 

function NavBar() {
  return (
   <>
   <nav className='Navbar-container'>
  <div className='portfo-title'>
   <h3 className='Portfolio-title'> Portfolio</h3>
   </div>
   <ul className='align-modules'>
   <li>
    <a href="#About" >About</a>
   </li>
   <li>
    <a href="#Experience" >Experience</a>
   </li>
   <li>
    <a href="#Projects"  >Projects</a>
   </li>
   <li>
    <a href="#Contact" >Contact</a>
   </li>
   </ul>
   </nav>
  </>
  )
}

export default NavBar