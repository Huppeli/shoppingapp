import React, { Component } from 'react';
import Item from './Item';

class ShoppingItems extends Component {
  render() {
    let itemNodes = this.props.data.map(item => {
      return (
        <Item name={ item.name } price= { item.price }>
        </Item>
      )
    })
    return(
      <div>
        { itemNodes }
      </div>
    )
  }
}
export default ShoppingItems;
