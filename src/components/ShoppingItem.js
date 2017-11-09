import React from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';

const item = require('../car_homework.json');

class ShoppingItem extends React.Component {
    constructor(props) {
      super(props);
    }

    addItemToCart(value) {
      this.props.getAddItem(value)
    }

    render() {
      return (
        <div className="shoppingitem">
          <h2>我要顯示商品</h2>
          {item.map((item) => 
            <div className="itemdiv" key={item.c_id}>
              <div className="imgdiv">
                <img src={item.c_image}></img>
              </div>
              <div>
                <p>廠牌：{item.c_make}</p>
                <p>型號：{item.c_name}</p>
                <p>年份：{item.c_desc}</p>
                <button onClick={this.addItemToCart.bind(this,item)} >加入購物車</button>
              </div>
            </div>)}
        </div>
      )
    }
  }

  export default ShoppingItem;
  