import { useState } from 'react';
import emailjs from '@emailjs/browser';
import {NavBar} from '../Components/nav-bar'

const ContactPage = () => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e: { preventDefault: () => void; }) => {
      e.preventDefault();

      emailjs.send(
        'service_axgzwmi', 
        'template_rf26wem', 
        {
          to_email: 'santhaashwin24@gmail.com',
          from_email: email,
          message: message
        },'AdIDCN5XOxKVldK9t'
      )
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message, please try again later.');
      });
    };

    return (
        <div className='bg-black h-screen'>
            <NavBar/>
            <div>
            </div>
            <div className="flex ml-12 p-4 text-6xl justify-center text-white bg-black">
                Contact Me
            </div>
            <div className='flex justify-center'>    
                <form onSubmit={sendEmail}>
                <div className='ml-12 p-4 text-2xl text-white'>
                    <label className='fixed left-100' htmlFor="email">Email Id:</label>
                    <input
                    className='fixed left-150 w-[300px] text-white border-2 border-white'
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </div>
                <div className='ml-12 p-4 text-2xl text-white'>
                    <label className=' top-60 fixed left-100' htmlFor="message">Message:</label>
                    <textarea
                    className='fixed left-150 mt-5 w-[300px] text-white border-2 border-white'
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    />
                </div>
                <button className='fixed left-150 top-90 border-2 border-white rounded-full text-white hover:bg-white hover:text-black' type="submit">
                    <div className='m-2 text-2xl'>Send Email</div>
                </button>
            </form>
            </div>
        </div>
    )

}

export default ContactPage;