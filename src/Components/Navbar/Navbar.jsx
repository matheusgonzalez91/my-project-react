import React, { useState } from 'react';
import styled from 'styled-components'
import './Navbar.css';
import { Link } from 'react-scroll';
import DarkMode from '../DarkMode/DarkMode';
import BurguerButton from '../BurguerButton/BurguerButton';

const Navbar = () => {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <header id='navbar'>
      <NavContainer>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <ul>
            <Link spy={true} to='main' smooth={true} activeClass='activeClass' offset={50}>
              <li className='gradient-text'>Home</li>
            </Link>

            <Link spy={true} to='sobre' smooth={true} activeClass='activeClass' offset={-300}>
              <li className='gradient-text'>Sobre</li>
            </Link>

            <Link spy={true} to='projetos' smooth={true} activeClass='activeClass' offset={-90}>
              <li className='gradient-text'>Projetos</li>
            </Link>

            <Link spy={true} to='contato' smooth={true} activeClass='activeClass'>
              <li className='gradient-text'>Contato</li>
            </Link>
            <DarkMode />
          </ul>
        </div>

        <div className="burguer">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </header>
  )
}

export default Navbar

const NavContainer = styled.nav`
  h2{
    color: white;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  .links{
      
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    li{
      color: black;
      font-size: 1rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      li{
        font-size: 1rem;
        color: black;
        display: block;
      }
      display: block;
    }
  }
  .links.active {
    width: 120px;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    ul{
      font-size: 1rem;
      display: block;
      margin-top: 7rem;
      color: black;
    }

    li{
      padding: 10px 0;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #fff;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 500px;
  z-index: -5;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 500px;
  }
`