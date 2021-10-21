import { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import Products from './components/Products';
import data from './data'

function App() {

  const { products } = data;

  const [cart, setCart] = useState([]);

  const Add = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const Remove = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCart(cart.filter((x) => x.id !== product.id));
    } else {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };


  return (
    <div className="App">
      <div className="heading">
        <h1>Shop</h1>
      </div>
      <div className="home">
        <Products products={products} add={Add} remove={Remove}/>
        <Cart cart={cart} />
      </div>
    </div>
  );
}

export default App;
