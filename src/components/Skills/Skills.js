import React from 'react'
import './Skills.css';

function Skills() {
  return (
    <>
    <div className='Skills-container'>
        <h2 className='Skills-title'> My Skills</h2>
        <div className='Skills-imgContainer'>
        <img src='./Images/html.png' alt='Html Image' height={80} width={80}/>
        <img src='./Images/css.png' alt='css Image' height={80} width={80}/>
        <img src='./Images/react.png' alt='React Image' height={80} width={80}/>
        <img src='./Images/node.png' alt='Node Image' height={80} width={80}/>
        <img src='./Images/graphql.png' alt='Graphql Image' height={80} width={80}/>
       </div>
       {/* <div className='experience'>
        <h2 className='experience-title'>Experience</h2>
           <ui className='experinece-details'>
            <li className='experience1'>
               <h2 className='experience-titles'>Full Stack Developer, Miracle Software Solutions </h2>
                <li className='experience-data'>
                  Worked on Home Page , Registration and Login Forms
                </li>
           </li>
           </ui>
       </div> */}
    </div>
    </>
  )
}

export default Skills;