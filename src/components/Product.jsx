import {React, useState} from 'react'
import './Product.css'

const Product = (props) => {

    var {product, add, remove} = props;
    // const {name, price} = props;
    const [quantity, setQuantity] = useState(0);

    const decrement = () => {
        setQuantity(quantity - 1);
    }

    const increment = () => {
        setQuantity(quantity + 1);
    }

    return (
        <>
            <div className="container_p">
                <div className="prouct_img">
                    <img src={product.image} alt="" width="170px" height="170px"/>
                </div>
                <div className="product_name">
                    <h3>{product.name}</h3>
                </div>
                <div style={{display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-around'}}>
                    <div className="price">
                        <h2>{product.price}</h2>
                    </div>
                    <div className="buttons">
                        <button className="quantity__btn" disabled={quantity <= 0} onClick={() => {remove(product); decrement(); }} >-</button>
                        <span className="quantity">{quantity < 0 ? 0 : quantity}</span>
                        <button className="quantity__btn" onClick={() => {add(product); increment(); }}>+</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
