import React, { useState } from 'react';
import { ProductInterface } from '../../types';
import { products } from '../../utils/productsList';
import Product from '../../components/Product';
import Cart from '../../components/Cart';
import Header from '../../layout/Header';
import AboutUs from '../../layout/AboutUs';

const Home: React.FC = () => {
  const [cart, setCart] = useState<ProductInterface[]>([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const addToCart = (product: ProductInterface) => {
    setCart([...cart, product]);
  };


  const removeFromCart = (product: ProductInterface) => {
    const index = cart.findIndex(item => item.id === product.id);
    if (index !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(index, 1);
      setCart(updatedCart);
    }
  };

  return (
    <div className="min-h-screen bg-pink-50">
      <Header />
      <main className="container mx-auto py-10">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-rose-700 mb-4 text-center">Catálogo</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <Product key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        </section>
        <AboutUs />
      </main>
      <div className="fixed bottom-16 right-4 w-16 h-16 bg-rose-500 rounded-full shadow-lg flex items-center justify-center z-50 cursor-pointer">
        <button onClick={() => setIsCartVisible(!isCartVisible)}>
          <img src="./src/assets/icons/cart.svg" alt="Carrito" className="w-8 h-8" />
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </button>
      </div>
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        isOpen={isCartVisible}
        onClose={() => setIsCartVisible(false)}
      />
    </div>
  );
};

export default Home;