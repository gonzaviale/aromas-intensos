import React from 'react';
import { CartProps } from '../types';

const Cart: React.FC<CartProps> = ({ cart, removeFromCart, isOpen, onClose }) => {

  const cartSummary = cart.map(p => ` *${p.name}`).join('\n');
  const message = `Hola! Me interesa comprar los siguientes productos:\n\n${cartSummary}`;

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-16 right-4 bg-white shadow-lg rounded-lg w-80 p-4 z-50">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h2 className="text-lg font-semibold text-rose-700 mb-4">Tu Carrito</h2>
          {cart.length === 0 ? (
            <p className="text-gray-600">Tu carrito está vacío.</p>
          ) : (
            <ul>
              {cart.map(product => (
                <li key={product.id} className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-800">{product.name}</h3>
                    <p className="text-gray-600">${product.price}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(product)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
          <a
            href={`https://wa.me/+541111111111?text=${encodeURIComponent(message)}`}
            className="mt-4 block text-center text-rose-500 font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Finalizar Compra
          </a>
        </div>
      )}
    </>
  );
};

export default Cart;
