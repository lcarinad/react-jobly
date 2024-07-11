import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, NavItem } from "reactstrap";

function NavBar() {
  return (
    <div>
      <Navbar className="navbar" navbar expand="md">
        <NavItem>
          <NavLink exact="true" to="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/companies">Companies</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/jobs">Jobs</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/login">Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/signup">Signup</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/profile">profile</NavLink>
        </NavItem>
      </Navbar>
    </div>
  );
}

export default NavBar;
