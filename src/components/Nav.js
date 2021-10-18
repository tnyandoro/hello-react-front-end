import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Nav = () => (
  <div>
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Click on the load Messages and get a random greeting</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as:
            {' '}
            <a href="#login">Visitor</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
);

export default Nav;
