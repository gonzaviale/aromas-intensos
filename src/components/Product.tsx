import React from 'react';
import { ProductProps } from '../types';


const Product: React.FC<ProductProps> = ({ product, addToCart }) => {
  return (
    <div className="border rounded-lg p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold text-rose-600">{product.name}</h3>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="text-lg font-bold text-rose-800 mt-4">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-4 px-6 py-3 bg-rose-500 text-white font-semibold rounded-lg hover:bg-rose-600 transition-colors duration-300"
      >
        Añadir al Carrito
      </button>
    </div>
  );
};

export default Product;
