import React, { Component } from 'react'
import Sneakers from './Sneakers'
import Cart from './Cart'
import dataGiay from '../Data/dataGiay.json'

export default class BaiTapGioHang extends Component {
    state  = {
        cart : [
            {id: 1,
            name: "Adidas Prophere",
            quantity : 1,
            price: 350,
            
           
            image: "http://svcy3.myclass.vn/images/adidas-prophere.png"}
        ]
    }

    addItem = (skChoosen) => {
        console.log(skChoosen); 
        let itemCart = {...skChoosen,quantity :1}    

        let cart = this.state.cart;
        let cartItem = cart.find(item=> item.id === itemCart.id) 
        if (cartItem) {
            cartItem.quantity += 1
        }else {
            cart.push(itemCart)
        }

        this.setState ({
            cart : cart
        })


    }

    deleteItem  = (idClick) => {
        console.log(idClick);
        let indexDel = this.state.cart.findIndex(item=>item.id === idClick) ;

        if (indexDel !== -1) {
            this.state.cart.splice(indexDel,1) ;

            this.setState({
                cart : this.state.cart
            })

        }

    }
  render() {
    return (
    
      <div className='container'>
       
        <div className='text-right'>
            <span className='text-danger'style={{cursor:'pointer',fontSize:'17px',fontWeight:'bold'}} data-bs-toggle="modal" data-bs-target="#modelId" >Cart(0)</span>
        </div>
        <h3>Product list</h3>
        <div className='row'>
            {dataGiay.map((sneak)=>{
                return  <div className='col-3 mt-4' key={sneak.id}>
                <Sneakers deleteItem={this.deleteItem} addToCart ={this.addItem} sneak={sneak} />
              </div>
             
            })}
           

        </div>

        <Cart deleteItem={this.deleteItem} cartItem ={this.state.cart} />
      </div>
    )
  }
}
