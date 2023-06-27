import React from 'react';
import './FooterContato.css';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdAlternateEmail } from 'react-icons/md';

const FooterContato = () => {
    return (
        <footer id='contato'>
            <h2 className='gradient-text'>Matheus Gonzalez</h2>
            <h2>Desenvolvedor Fullstack Web</h2>
            <div className="line-footer"></div>
            <h2> <IoLogoWhatsapp className='icon' /> (11) 93585-2499</h2>
            <h2><MdAlternateEmail className='icon' /> gonzalezmatheus01@gmail.com</h2>
        </footer>
    )
}

export default FooterContato