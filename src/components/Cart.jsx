import React from 'react'
import './Cart.css'
const Cart = (props) => {

    const {cart} = props;

    var total = 0;

    return (
        <>
        <div className="cart_container">
            <div className="heading">
                <h2>Cart</h2>
            </div> 
            <div className="products">
                {cart.map((item, i) => (
                    <h3>{item.name} = {item.price} * {item.qty}</h3>
                ))}
            </div>
            <div>
                {/* <h2>Total: {cart.map((item, i) => (
                    total += 
                ))} </h2> */}
            </div>
        </div>
           
        </>
    )
}

export default Cart
