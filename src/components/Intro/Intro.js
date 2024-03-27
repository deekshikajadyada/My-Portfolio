import React from 'react';
import './Intro.css';

export default function Intro() {
  return (
    <>
      <div className='hero'>
        <div className='details'>
          <h2 className='Name'>
            Hi, I'm Deekshika Jadyada
          </h2>
          <p className='about'>
            I'm so and so...
          </p>
          <a href="mailto:myemail@email.com" className='contact'>
            Contact Me
          </a>
        </div>
        <div className='image'>
          <img src='/CuteGirl.webp' alt='img' height={250} width={250} />
        </div>
      </div>
    </>
  );
}
