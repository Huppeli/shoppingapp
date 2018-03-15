import React, { Component } from 'react';
import axios from 'axios';
import ShoppingItems from './ShoppingItems';

class ShoppingApp extends Component {
  constructor(props) {
    super(props);
    this.state = {data: [] };
  }
  // get items from server using axios
  loadItemsFromServer = () => {
    axios.get(this.props.url)
    .then(res=> {
      this.setState({ data: res.data});
    })
  }
  componentDidMount() {
    this.loadItemsFromServer();
    setInterval(this.loadItemsFromServer, this.props.pollInterval);
  }
  render() {
    return(
      <div>
        <h2>ShoppingApp</h2>
        <ShoppingItems data={ this.state.data }/>
      </div>
    )
  }
}

export default ShoppingApp;
