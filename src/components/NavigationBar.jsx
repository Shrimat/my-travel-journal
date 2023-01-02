import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function NavigationBar() {
    return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">my travel journal.</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Container>
        </Navbar>
    );
}

export default NavigationBar;