import React from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
      return (
        <div className="shoppingcart">
          <h2>我是購物車</h2>
        </div>
      )
    }
  }

  export default ShoppingCart;