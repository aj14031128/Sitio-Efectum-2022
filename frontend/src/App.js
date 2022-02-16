//import logo from './logo.svg';
import './App.css';
import React from 'react';

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import Footer from "./Components/layout/Footer";
import Header from "./Components/layout/Header";
import Nav from "./Components/layout/Nav";
import NosotrosPage from "./Pages/NosotrosPage";
import HomePage from "./Pages/HomePage";
import ServiciosPage from "./Pages/ServiciosPage";
import ContactoPage from "./Pages/ContactoPage";
import ProyectosPage from "./Pages/ProyectosPage";
import NovedadesPage from "./Pages/NovedadesPage";

import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>


function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
      <Nav></Nav>
        <Routes>
        <Route path="/" exact element={<HomePage />}/>
        <Route path="/nosotros" exact element={<NosotrosPage />}/>
        <Route path="/proyectos" exact element={<ProyectosPage />}/>
        <Route path="/servicios" exact element={<ServiciosPage />}/>
        <Route path="/contacto" exact element={<ContactoPage />}/>
        <Route path="/novedades" exact element={<NovedadesPage />}/>
        </Routes>
      <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
