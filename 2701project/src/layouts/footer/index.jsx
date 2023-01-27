import React from 'react'
import "./index.scss"

const Footer = () => {
  return (
    <div id='footer'>
        <div className="footerPage">
            <div className="container">
               <div className="footer-text">
               <div className="sec1">
                    <p className='sec-1-p'>Mary Byrd</p>
                    <input className='sec-1-input' type="text" placeholder='Your Email'/>
                    <button className='sec-1-btn'>Send</button>
                </div>
                <div className="sec2">
                    <ul>About
                        <li>
                            About Us
                        </li>
                        <li>
                        Our Partners
                        </li>
                        <li>
                        Our Services
                        </li>
                    </ul>
                </div>
                <div className="sec2">
                    <ul>Contact
                        <li>
                        Contact Us
                        </li>
                        <li>
                        FAQ Page
                        </li>
                        <li>
                        About Me
                        </li>
                    </ul>
                </div>
                <div className="sec3">
                    <h3 className='sec3-h3'>Follow Us</h3>
                </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Footer