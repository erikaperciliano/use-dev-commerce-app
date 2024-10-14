// CartContext.tsx

import React, { createContext, useContext, useEffect, useState } from "react";
import { Product } from "../types/product";

type CartContextType = {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  getCartCount: () => number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>(() => {
    const storedItems = localStorage.getItem("cartItems");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product) => {
    // Verificando se o produto já está no carrinho
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (!existingProduct) {
      setCartItems((prevItems) => [...prevItems, product]);
    } else {
      alert("Este produto já está no carrinho!");
    }
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const getCartCount = () => {
    return cartItems.length;
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, getCartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
