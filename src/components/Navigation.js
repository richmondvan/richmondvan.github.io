import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { GoMarkGithub } from 'react-icons/go';
import { IoMdDocument } from 'react-icons/io'
import {FaLinkedin} from 'react-icons/fa'
import '../App.css'
import './Navigation.css';

function Navigation() {
    return (
        <Navbar variant='light' expand="sm">
            <Container>
                <Navbar.Brand href="#">
                    evan zheng
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#projects">projects</Nav.Link>
                        <Nav.Link href="#contacts">contact me</Nav.Link>
                    </Nav>
                    <Nav>
                        <li style={{display: 'flex'}}>
                            <Nav.Link className='navicon' href="./Resume.pdf">
                                <IoMdDocument size='18px'/>
                            </Nav.Link>
                            <Nav.Link className='navicon' href="https://github.com/evtyz">
                                <GoMarkGithub/>
                            </Nav.Link>
                            <Nav.Link className='navicon' href="https://www.linkedin.com/in/evtyz/">
                                <FaLinkedin/>
                            </Nav.Link>
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;
