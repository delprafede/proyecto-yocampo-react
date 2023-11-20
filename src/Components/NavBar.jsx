

import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function NavBar() {
  return (

 <>
    <Navbar expand="lg" className="container border">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="contaierflex">
             <NavLink className= "textdeco" to="/">Inico</NavLink>
            <NavLink className= "textdeco" to="/nosotros">Nosotros</NavLink>
            <NavLink className= "textdeco" to="./contacto">Contaaaaaaacto</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 </>
  );
}

export default NavBar;