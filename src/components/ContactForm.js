import React from 'react'

import '../assets/stylesheets/ContactForm.css'

const ContactForm = () => (
  <div id="ContactForm">
    <h2>Send me a message</h2>
    <div id="emailForm">
        <form id="contact-form" action="https://formspree.io/jonesderik91@gmail.com" method="POST" method="POST">
          <input className="hidden" type="hidden" name="From" value="derikjones.com" />
          <input className="hidden" type="hidden" name="_gotcha" />
          <input id="firstName" type="text" name="First Name" placeholder="First Name" required />                    
          <input id="lastName" type="text" name="Last Name" placeholder="Last Name" required />
          <input id="emailBox" type="email" name="Email" placeholder="Email" required />
          <textarea id="messageBox" type="text" name="Message" placeholder="Message" required></textarea>
          <input id="send" type="submit" value="Send" />
        </form>
    </div>
  </div>
)

export default ContactForm