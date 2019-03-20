import React, { Component } from 'react';
import MondrianItem from './MondrianItem';

export default class Mondrian extends Component {
  constructor() {
    super();
    this.state = {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    };
  }

  render() {
    return (
      <ul className="mondrian-container">
        {this.state.items.map(ele => (
          <MondrianItem key={ele} />
        ))}
      </ul>
    );
  }
}
