import {React, useState, useEffect} from 'react'
import './Cart.css'
const Cart = (props) => {

    const {cart} = props;

    const [total, setTotal] = useState(0);

    const getTotal = () => {
        setTotal(0);
        var sum = 0
        for (let i = 0; i < cart.length; i++) {
            sum = sum + cart[i].total;
        }
        setTotal(sum);
    }

    useEffect(() => {
        getTotal();
    }, [cart]);
    

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
            <div style={{textAlign: 'center'}}>
                <h2>Total: {total}</h2>
            </div>
        </div>
           
        </>
    )
}

export default Cart
