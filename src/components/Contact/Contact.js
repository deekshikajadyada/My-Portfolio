import React from 'react';
import './Contact.css';
// import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  return (
    <div className='contact-container'>
        <div className='contacts-details'>
      <h2 >Contact</h2>
      <p>Feel Free to reach out!</p>
      </div>
      <ul className='contact-details'>
        <li className='contacts'>
          {/* <EmailIcon /> */}
          <a href="mailto:your-email@example.com">deekshikajadyada@gmail.com</a>
        </li>
        <li className='contacts'>
          <a href="https://example.com">deekshikajadyada0011@gmail.com</a>
        </li>
        <li className='contacts'>
          <a href="tel:+1234567890">+1 (234) 567-890</a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
