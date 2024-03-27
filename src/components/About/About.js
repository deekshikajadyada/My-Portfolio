import React from 'react'
import './About.css';
function About() {
  return (
    <>
    <div className='aboutdetails'>
       <div className='aboutimg'>
      <img src='./GirlWithLapy.webp' alt='Img2' height={300} width={300}/>  
      </div>
      <ul className='text-details'>
      {/* <div className='text-details'> */}
      <li className='text-detail'>
       <h2 className='title'> Frontend Developer</h2>
       <p className='frontend-details'>
        I'm a frontend developer
       </p>
       </li>
       <li className='text-detail'>
       <h2 className='title'> Backend Developer</h2>
       <p className='Backend-details'>
        I'm a Backend developer
       </p>
       </li>
       
       </ul>
      {/* </div> */}
    </div>
    </>
  )
}

export default About