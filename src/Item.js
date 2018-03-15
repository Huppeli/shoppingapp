import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <h3>{this.props.price}</h3>
      </div>
    )
  }
}

export default Item;
