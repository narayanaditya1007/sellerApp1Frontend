import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
       <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
          <div className="container-fluid nav-div">
            <NavLink to="/" className="navbar-brand" href="#">
              Seller Application
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link" aria-current="page" href="#">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link" href="#">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   <FontAwesomeIcon icon={faUser} style={{color: "#193c4d",}} />
                  </NavLink>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li><NavLink to="/profile" className="dropdown-item" href="#">Profile</NavLink></li>
                    <li><NavLink to="/logout" className="dropdown-item" href="#">Logout</NavLink></li>
                  </ul>
                </li>
              </ul>
              
            </div>
          </div>
        </nav>

  )
}

export default Header