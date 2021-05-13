import React, { Component } from 'react'

import './assets/css/styles.css'

import Header from './layouts/Header'
import Main from './layouts/Main'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    )
  }
}

export default App