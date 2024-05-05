import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h3>Connect with us!</h3>
        <p>
        At our core, we're dedicated to simplifying the selling experience for you. 
        Our platform is meticulously crafted to provide seamless experience, empowering 
        sellers like you to showcase your products effortlessly. 
        </p>
        <ul className="socials">
          <li>
            <a href="#">
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-google-plus" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-youtube" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-linkedin-square" />
            </a>
          </li>
        </ul>
      </div>
    </footer>

  )
}

export default Footer