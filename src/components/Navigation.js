import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Image, Nav } from 'react-bootstrap';
import { GoMarkGithub } from 'react-icons/go';
import '../App.css'
import './Navigation.css';

function Navigation() {
    return (
        <div>
          <Navbar expand="xl" variant="dark" bg="dark" style={{minHeight:'8vh', paddingTop:'1vh'}}>
            <Container>
              <Navbar.Brand href="#" style={{color: `rgba(255, 255, 255, .9)`}}>
                <Image src="/logo.png" height="30" style={{marginRight: '2vw'}}/> 
                EVAN ZHENG
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link>HOME</Nav.Link>
                  <Nav.Link>PROJECTS</Nav.Link>
                  <Nav.Link>CONTACT ME</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link>
                    RESUME (PDF)
                  </Nav.Link>
                  <Nav.Link>
                    <GoMarkGithub/>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
    )
}

export default Navigation;
