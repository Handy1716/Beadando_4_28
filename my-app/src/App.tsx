import React from 'react';
import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Button, Container, Nav, NavDropdown, Navbar, Tab, Tabs } from 'react-bootstrap';
import Hiabajelentes from './Components/hibajelentes';
import Karakterek from './Components/karakterek';
import Fooldal from './Components/fooldal';
import Lablec from './Components/lablec';

function App() {
  return(
    <div>
       <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Fő oldal</Nav.Link>
            <Nav.Link href="/karakterek">Karakterek</Nav.Link>
            <Nav.Link href="/hibajelentes">Hibabejelentés</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  <Routes>
        <Route path="/" element={<Fooldal />} />
        <Route path="/karakterek" element={<Karakterek />} />
        <Route path="/hibajelentes" element={<Hiabajelentes />} />
     </Routes>
    <Lablec />
    </div>
  );

}

export default App;
