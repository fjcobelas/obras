import React from 'react';
import './NavBar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './img/logo.png';


function NavBar(props) {
    return (
        <div>
            <img src={logo} />
            <ul className='nav'>
                <a href="#">Home</a>
                <a href="#">Quien Soy</a>
                <a href="#">Obras</a>
                <a href="#">Contacto</a>
                
            </ul>
    
        </div>
    );
}

export default NavBar;