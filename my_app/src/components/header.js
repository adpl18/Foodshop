import React from 'react'
import logo from '../data/imagenes/logo.png';
import './header.css'
import { Link }  from 'react-router-dom'

// ...later

function Header() {
    return (
        <nav className='header'>
            <Link to="/" className="header__link">
                <img className='header__logo' src={logo} alt="logo" />
            </Link>
            <div className='header__texto'>
                <div className='header__nav'>
                    <Link to="/admin" className="header__link">
                        <div className='header__option'>ADMINISTRADOR</div>
                    </Link>
                    <Link to="/" className="header__link">
                        <div className='header__option'>QUIENES SOMOS</div>
                    </Link>
                    <Link to="/login" className="header__link">
                        <div className='header__option'>INICIAR SESION</div>
                    </Link>
                    <Link to="/" className="header__link">
                        <div className='header__option'> REGISTRARSE </div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Header;
                    //<Link to="/historial" className="header__link">
                    //    <div className='header__option'> HISTORIAL </div>
                    //</Link>