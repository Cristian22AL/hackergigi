import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function Header() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="JS_logo_2.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            Javascript World
          </Navbar.Brand>
        </Container>
      </Navbar>
  );
}

export default Header