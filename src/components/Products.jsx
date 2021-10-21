import React from 'react'
import Product from './Product';
import './Products.css'

const Products = (props) => {
    const { products, add, remove } = props;
    return (
        <>
            <div className="container">
                {products.map((product) => (
                    <Product key={product.id} product={product} add={add} remove={remove}/>
                ))}
            </div>
        </>
    );
}

export default Products
