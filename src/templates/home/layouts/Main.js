import { Component } from 'react'

import Cards from '../components/Cards'

class Main extends Component {
  constructor(props) {
    super(props)

    this.getData = this.getData.bind(this)

    this.state = {
      nextPage: 1,
      loading: true,
      error: null,
      data: {
        info: {},
        results: []
      }
    }
  }

  componentDidMount() {
    this.getData()
  }

  async getData() {
    this.setState({
      loading: true,
      error: null
    })

    try {
      const RESPONSE = await fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`),
            DATA     = await RESPONSE.json()

      this.setState({
        loading: false,
        nextPage: this.state.nextPage + 1,
        data: {
          info: {
            ...DATA.info
          },
          results: [
            ...this.state.data.results,
            ...DATA.results
          ]
        }
      })
    } catch (error) {
      this.setState({
        loading: false,
        // error: error
        error
      })

      console.error('EL ERROR EEEEEESSS: ', error)
    }
  }

  render() {
    if (this.state.error) return `ERROR: ${this.state.error.message}`

    return (
      <main id="main">
        {this.state.loading && (
          <p>CARGANDO....</p>
        )}
        <Cards 
          data={this.state.data.results}
        />
        {!this.state.loading && (
          <button className="button"
            onClick={() => this.getData()}
          >Load More!</button>
        )}
      </main>
    )
  }
}

export default Main