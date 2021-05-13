import { Component } from 'react'

class Card extends Component {
  render() {
    return (
      <ul className="list">
        {this.props.characters.map(character => (
          <li className="list__item"
            key={character.id}
          >
            <img className="item__image"
              src={character.image} 
              alt={character.name} 
            />
            <h2 className="item__title">{character.name}</h2>
          </li>
        ))}
      </ul>
    )
  }
}

export default Card