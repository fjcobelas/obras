import './NavBar.css';
import logo from './img/logo.png';
import CartWidget from '../CartWidget';


function NavBar() {
    return (
        <header>
        <div>
            <a href="/"> <img  src={logo} alt="logo"></img></a>
            <nav className='nav'>
                <a href="#">Home</a>
                <a href="#">Quien Soy</a>
                <a href="#">Obras</a>
                <a href="#">Contacto</a>                  
            </nav>
                 <CartWidget />                
        </div>
        </header>
    );
}

export default NavBar;