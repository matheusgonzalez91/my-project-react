import './Sobre.css';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Sobre = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <section className='sobre' id='sobre'>
            <div className="sobre-mim">
                <div className="minha-historia">
                    <h2 data-aos="slide-right" className='gradient-text'>Sobre mim</h2>
                    <p>Sou um desenvolvedor Fullstack Web e atualmente estou cursando Análise e Desenvolvimento de Sistemas para aprimorar ainda mais meus conhecimentos na área.</p>
                </div>

                <div data-aos="fade-right" className="line"></div>

                <div className="habilidades">
                    <h2 data-aos="slide-left">Skills</h2>
                    <p>Front-end: <span className='gradient-text'>HTML</span> | <span className='gradient-text'>CSS</span> | <span className='gradient-text'>JavaScript</span> | <span className='gradient-text'>jQuery</span> | <span className='gradient-text'>React Js</span></p>
                    <p>Back-end: <span className='gradient-text'>Python</span> | <span className='gradient-text'>PHP</span></p>
                    <p>Banco de Dados: <span className='gradient-text'>MySQL</span> | <span className='gradient-text'>PostgreSQL</span> | <span className='gradient-text'>SQL Server</span> | <span className='gradient-text'>MongoDB</span></p>
                </div>
            </div>
        </section>
    )
}

export default Sobre