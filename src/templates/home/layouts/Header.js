import { Component } from 'react'

import logo from '../assets/images/logo.png'

class Header extends Component {
  render() {
    return (
      <header id="header">
        <img className="logo"
          src={logo}
          alt="Logo de 'Rick and Morty' " 
        />
      </header>
    )
  }
}

export default Header