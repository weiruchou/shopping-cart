import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import ShoppingItem from './components/ShoppingItem';
import ShoppingCart from './components/ShoppingCart';

class Container extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        additem: [],
      }
    }

    getAddItem(value) {
      this.state.additem.push(value)
      console.log(this.state.additem)
    }

    render() {
        return (
          <div className="container">
            <ShoppingItem getAddItem= {this.getAddItem.bind(this)}/>
            <ShoppingCart />
          </div>
        )
      }
    }

ReactDOM.render(
    <Container />,
    document.getElementById("root")
) 