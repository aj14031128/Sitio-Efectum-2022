import React from 'react';
import '../../Styles/Components/Layout/Nav.css'
import NavLink from "./NavLink";


const Nav=(props)=>{
    return(
        <div className='nav'>
                <ul>
                    <li><NavLink activeClassName="activo" exact to="/"> Home </NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/nosotros">Nosotros</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/proyectos">Proyectos</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/servicios">Servicios</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/novedades">Novedades</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/contacto">Contacto</NavLink></li>
                </ul>
        </div>
    );
    }
    export default Nav;

    /*<li><NavLink to="/" style={({ isActive }) => ({ backgroundColor: isActive ? '#0079d3' : '#004e87' })}>Inicio</NavLink></li>*/
