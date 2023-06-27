import './Main.css';
import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

import GitHub from '../../images/github.png';
import LinkedIn from '../../images/linkedin.png';

import Curriculo from './Matheus Gonzalez (CV).pdf';

const Main = () => {
    return (
        <section className='main' id='main'>
            <div className="matheus">
                <motion.h2
                    initial={{ x: -200, opacity: 0.1 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2 }}
                >Olá, me chamo
                </motion.h2>

                <motion.h2 className='gradient-text'
                    initial={{ x: 200, opacity: 0.1 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 3 }}
                >Matheus Gonzalez
                </motion.h2>

                <motion.h2
                    initial={{ x: -200, opacity: 0.1 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 4 }}
                >Desenvolvedor Fullstack Web
                </motion.h2>

                <Link spy={true} to='sobre' smooth={true} activeClass='activeClass' offset={-300}>
                    <button>Venha me conhecer</button>
                </Link>
                <a href={Curriculo} download><button>Download CV</button></a>
                <a href="https://www.linkedin.com/in/matheussouzagonzalez/" target='_blank' rel='noreferrer'><img className='image-icon' src={LinkedIn} alt="matheussouzagonzalez" /></a>
                <a href="https://github.com/matheusgonzalez91" target='_blank' rel='noreferrer'><img className='image-icon' src={GitHub} alt="matheusgonzalez91" /></a>
            </div>
        </section>
    )
}

export default Main