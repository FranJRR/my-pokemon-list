import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar>
      <Navbar.Brand as={Link} to="/">
        My Pokemon List
      </Navbar.Brand>
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <NavItem eventkey={1} href="/">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </NavItem>
          <NavItem eventkey={2} href="/search">
            <Nav.Link as={Link} to="/search">
              Search
            </Nav.Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
