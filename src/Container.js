import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import ShoppingItem from './components/ShoppingItem';
import ShoppingCart from './components/ShoppingCart';

class Container extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        addToCart: [],
      }
    }

    getAddItem(value) {
      const additem = this.state.addToCart;
      additem.push(value)
      this.setState({addToCart: additem})
    }


    render() {
        
        return (
          <div className="container">
            <ShoppingItem getAddItem= {this.getAddItem.bind(this)}/>
            <ShoppingCart cart= {this.state.addToCart}/>
          </div>
        )
      }
    }

ReactDOM.render(
    <Container />,
    document.getElementById("root")
) 