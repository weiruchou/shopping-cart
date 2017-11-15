import React from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }

    deleteCartItem(index) {
      let temp = [];
      
      //為何用以下方法會多包一層？
      // temp.push(this.props.cart.slice(0,index));
      // temp.push(this.props.cart.slice(index+1));
      
      //取點的項目之前所有項目（取頭）
      this.props.cart.slice(0,index).map(value => temp.push(value))
      //取點的項目之後所有項目（取尾）
      this.props.cart.slice(index+1).map(value => temp.push(value))
      this.props.setCount(temp);
    }

    addCount(index) {
      let tempCount = this.props.cart.slice(0,this.props.cart.length);
      tempCount[index].amount+=1;
      this.props.setCount(tempCount);
    }

    minusCount(index) {
      let temp =[];
      let tempCount = this.props.cart.slice(0,this.props.cart.length);
      tempCount[index].amount-=1;  
      this.props.setCount(tempCount);
      
      if(tempCount[index].amount === 0 ) {
        tempCount.slice(0,index).map(value => temp.push(value))
        tempCount.slice(index+1).map(value => temp.push(value))
        this.props.setCount(temp);
      }
    }

    render() {
      return (
        <div className="shoppingcart">
          <h2>我是購物車</h2>
          {this.props.cart.map((value,index) =>
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