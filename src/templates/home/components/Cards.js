import { Component } from 'react'

import Card from '../components/Card'

class Cards extends Component {
  render() {
    return (
      <div className="container">
        <Card 
          characters={this.props.data}
        />
      </div>
    )
  }
}

export default Cards