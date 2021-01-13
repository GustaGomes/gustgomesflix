import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
import { Link } from 'react-router-dom';
// import ButtonLink from './components/ButtonLink/index';

function Menu(){
    return (
        <nav className="Menu">

            <a href="/">
                <img className="Logo" src={Logo} alt="AluraFlix" />
            </a>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>

            {/* <ButtonLink className="ButtonLink" href="/">
                Passando pro filho
            </ButtonLink> */}

        </nav>
    );
}

export default Menu;