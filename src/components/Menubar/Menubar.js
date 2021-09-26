import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Menubar.css'

const Menubar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">The Charity</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#features">About Us</Nav.Link>
                            <Nav.Link href="#pricing">Our Vision</Nav.Link>
                            <NavDropdown title="Services" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Education</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Food</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Clothes</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Medical</NavDropdown.Item>
                            </NavDropdown>
                            <button className="donate-btn">Donate</button>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Menubar;