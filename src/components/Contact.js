import React from 'react'

import '../assets/stylesheets/Contact.css'
import derikjones from '../assets/images/derikjones.jpg'
import ContactForm from './ContactForm'

const Contact = () => (
  <div className="Contact" id="Contact">
    <h1 className="Contact__h1">contact</h1>
    <img className="Contact__profile" src={derikjones} />
    <ContactForm />
  </div>
)

export default Contact