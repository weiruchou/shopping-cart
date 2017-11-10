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
          {this.props.cart.map((value) =>
            <div className="cartitemdiv" key={value.c_id}>
                <div className="imgdiv">
                  <img src={value.c_image}></img>
                </div>
                <div>
                  <p>廠牌：{value.c_make}</p>
                  <p>型號：{value.c_name}</p>
                  <p>年份：{value.c_desc}</p>
                  <button>刪除</button>
                </div>
            </div>)
          }
        </div>
      )
    }
  }

  export default ShoppingCart;