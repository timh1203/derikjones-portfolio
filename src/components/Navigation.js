import React from 'react'
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap'
import '../assets/stylesheets/Navigation.css'
import logo from '../assets/images/logo.png'

const Navigation = (props) => {
    return (
      <div id="Navigation" >
        <Navbar className="justify-content-around">
            <NavbarBrand className="" href="/"><img src={logo} /></NavbarBrand>
            <Nav className="navbar ml-auto">
              <NavItem>
                  <NavLink href="#">Home</NavLink>
              </NavItem>
              <NavItem >
                  <NavLink href="#">Portfolio</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink href="#">Photo</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink href="#">Contact</NavLink>
              </NavItem>
            </Nav>
          </Navbar>
      </div>
    )
}

export default Navigation