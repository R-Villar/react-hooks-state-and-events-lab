import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsCart] = useState(false)
  
  function addToCart() {
    setIsCart((isInCart) => !isInCart)
  }  

  return (
    <li className={isInCart ? "in-cart" : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart ? 'remove' : 'add'}
      onClick={addToCart}>{isInCart ? 'remove from' : 'add to'} Cart</button>
    </li>
  );
}

export default Item;
