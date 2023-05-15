import React, { Component } from 'react'

export default class Sneakers extends Component {
    render() {
        const {sneak,addToCart} = this.props;
        return (
            <div className='card'>
                <img src={sneak.image} alt="..." />
                <div className='card-body'>
                    <h3>mat kinh</h3>
                    <p>1000$</p>
                    <button className='btn btn-dark' onClick={() =>{
                        addToCart(sneak);
                    }} >
                        <i className='fa fa-cart-plus'></i>
                        Add to cart</button>

                </div>

            </div>
        )
    }
}
