import './Projetos.css';
import React, { useEffect } from 'react';
import NumberCounter from 'number-counter';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Projetos = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <section className='projetos' id='projetos'>
            <div data-aos="fade-right" className="total-projetos">
                <h2 className='gradient-text'>
                    <NumberCounter end={30} start={0} delay='11' preFix='+' />
                </h2>
                <h3>Projetos Realizados</h3>
            </div>
            <div className="flex-projetos">
                <div className="box-projetos">
                    <h2 className='gradient-text'>Python</h2>
                    <p>Cadastro de Clientes: <a href="https://github.com/matheusgonzalez91/cadastro-de-clientes" target='_blank' rel='noreferrer' className='gradient-text'>Acessar</a></p>
                    <p>CRUD: <a href="https://github.com/matheusgonzalez91/CRUD-Python" target='_blank' rel='noreferrer' className='gradient-text'>Acessar</a></p>
                    <p>Dashboard: <a href="https://github.com/matheusgonzalez91/Dashboards-Python" target='_blank' rel='noreferrer' className='gradient-text'>Acessar</a></p>
                    <p>Cadastro Produtos: <a href="https://github.com/matheusgonzalez91/Lojinha" target='_blank' rel='noreferrer' className='gradient-text'>Acessar</a></p>

                </div>

                <div className="box-projetos">
                    <h2 className='gradient-text'>PHP</h2>
                    <p>Sistema de Login: <a href="https://github.com/matheusgonzalez91/sistema-de-login-php" target='_blank' rel='noreferrer' className='gradient-text'>Acessar</a></p>
                    <p>Upload de Arquivos: <a href="https://github.com/matheusgonzalez91/upload-php" target='_blank' rel='noreferrer' className='gradient-text'>Acessar</a></p>
                    <p>Baixar Imagem: <a href="https://github.com/matheusgonzalez91/baixar-imagem-pela-url" target='_blank' rel='noreferrer' className='gradient-text'>Acessar</a></p>
                </div>

                <div className="box-projetos">
                    <h2 className='gradient-text'>HTML | CSS | JS</h2>
                    <p>M&C Gonzalez: <a href="https://mcgonzalez.com.br/" target='_blank' rel='noreferrer' className='gradient-text'>Acessar</a></p>
                    <p>Lista de Tarefas: <a href="https://github.com/matheusgonzalez91/Lista-de-Tarefas" target='_blank' rel='noreferrer' className='gradient-text'>Acessar</a></p>
                    <p>Jogo do Mario: <a href="https://github.com/matheusgonzalez91/Mario-Game" target='_blank' rel='noreferrer' className='gradient-text'>Acessar</a></p>
                </div>

                <div className="box-projetos">
                    <h2 className='gradient-text'>Node JS</h2>
                    <p>Portal de Notícias: <a href="https://github.com/matheusgonzalez91/portal-noticias" target='_blank' rel='noreferrer' className='gradient-text'>Acessar</a></p>
                </div>

                <div className="box-projetos">
                    <h2 className='gradient-text'>React JS</h2>
                    <p>Buscador de CEP: <a href="https://github.com/matheusgonzalez91/buscador-cep" target='_blank' rel='noreferrer' className='gradient-text'>Acessar</a></p>
                    <p>Janela Modal: <a href="https://github.com/matheusgonzalez91/Janela-Modal" target='_blank' rel='noreferrer' className='gradient-text'>Acessar</a></p>
                </div>
            </div>
        </section>
    )
}

export default Projetos