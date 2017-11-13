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
      
      //判斷是否將要加入的項目推入購物車,預設為是
      let exist = true;
      //存放已加入購物車的項目
      const additem = this.state.addToCart.slice(0,this.state.addToCart.length);
      //判斷購物車內是否有商品
      if(this.state.addToCart.length) {
        //判斷要加入的商品id是否有存在於購物車內
        additem.map((text,index) => {if(text.c_id === value.c_id){
          text.amount+=1;
          exist = false;
        }})
      }

      if(exist) {
        value.amount=1;
        additem.push(value)
      }
      console.log(additem)
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

