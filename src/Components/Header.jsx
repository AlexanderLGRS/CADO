import React from 'react';
import './Styles/Header.css';
import logo from '../Assets/CADO.jpg'
export default function Header() {
    return (
        <React.Fragment>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark sticky-top'>
                <div className='container-fluid' id='header'>
                    <img
                        className='header-logo'
                        src={logo}
                        alt='Logo CADO'
                    />
                    <a className='navbar-brand' href='#'>
                        Con Animo De Ofender
                    </a>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarNavDropdown'
                        aria-controls='navbarNavDropdown'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div
                        className='collapse navbar-collapse'
                        id='navbarNavDropdown'
                    >
                        <ul className='navbar-nav'>
                            
                            <li className='nav-item'>
                                <a className='nav-link active' href='#playerContainer'>
                                    Reproductor
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#chapters'>
                                    Capitulos
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#comediants'>
                                    Comediantes
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>
                                    Próximos Shows
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}
