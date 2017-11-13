import React from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
        this.state= ({
          cartItem: this.props.cart,
        })
    }

    deleteCartItem(index) {
      const temp = this.state.cartItem
      temp.splice(index,1);
      this.setState({cartItem : temp})
    }

    addCount(index) {
      let temp = this.state.cartItem;
      temp[index].amount+=1;
      this.setState({cartItem: temp})
    }

    minusCount(index) {
      let temp = this.state.cartItem;
      temp[index].amount-=1;
      if(temp[index].amount ===0) {
        temp.splice(index,1);
      }
      this.setState({cartItem: temp})
    }

    render() {
      return (
        <div className="shoppingcart">
          <h2>我是購物車</h2>
          {this.state.cartItem.map((value,index) =>
            <div className="cartitemdiv" key={value.c_id}>
                <div className="imgdiv">
                  <img src={value.c_image}></img>
                </div>
                <div>
                  <p>廠牌：{value.c_make}</p>
                  <p>型號：{value.c_name}</p>
                  <p>年份：{value.c_desc}</p>
                  <p>數量：<button onClick={this.minusCount.bind(this,index)}>-</button>{value.amount}<button onClick={this.addCount.bind(this,index)}>+</button></p>
                  <button onClick={this.deleteCartItem.bind(this,index)}>刪除</button>
                </div>
            </div>)
          }
        </div>
      )
    }
  }

  export default ShoppingCart;