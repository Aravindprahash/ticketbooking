import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addMovie = (movie) => {
    setCartItems(prev => {
      const existing = prev.find(item => item._id === movie._id);
      if (existing) {
        return prev.map(item =>
          item._id === movie._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...movie, quantity: 1 }];
    });
  };

  const increaseQty = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems(prev =>
      prev
        .map(item =>
          item._id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.ticketprice,
    0
  );

  return (
    <CartContext.Provider
      value={{ cartItems, addMovie, increaseQty, decreaseQty, clearCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
