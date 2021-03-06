import { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import Products from './components/Products';
import data from './data'

function App() {

  const { products } = data;

  const [cart, setCart] = useState([]);

  const Add = (product) => {
    const oldcart = cart.find((x) => x.id === product.id);
    if (oldcart) {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...oldcart, qty: oldcart.qty + 1, total: oldcart.total + product.price } : x
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1, total: product.price }]);
    }
  };

  const Remove = (product) => {
    const oldcart = cart.find((x) => x.id === product.id);
    if (oldcart.qty === 1) {
      setCart(cart.filter((x) => x.id !== product.id));
    } else {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...oldcart, qty: oldcart.qty - 1, total: oldcart.total - product.price } : x
        )
      );
    }
  };


  return (
    <div className="App">
      <div className="heading">
        <h1>Fruit Shop</h1>
      </div>
      <div className="home">
        <Products products={products} add={Add} remove={Remove}/>
        <Cart cart={cart} />
      </div>
    </div>
  );
}

export default App;
