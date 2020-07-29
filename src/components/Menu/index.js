import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink/index';

function Menu(){
    return (
        <nav className="Menu">

            <a href="/">
                <img className="Logo" src={Logo} alt="AluraFlix" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Passando pro filho
            </Button>

            {/* <ButtonLink className="ButtonLink" href="/">
                Passando pro filho
            </ButtonLink> */}

        </nav>
    );
}

export default Menu;