import React, { useState } from 'react';

function ShoppingCart() {
  const [cart, setCart] = useState([]);
  
  // Function to add a book to the cart
  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  // Function to remove a book from the cart
  const removeFromCart = (book) => {
    const updatedCart = cart.filter((item) => item !== book);
    setCart(updatedCart);
  };

  // Calculate the total price
  const total = cart.reduce((acc, book) => acc + book.price, 0);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((book, index) => (
              <li key={index}>
                {book.title} - ${book.price}
                <button onClick={() => removeFromCart(book)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total Price: ${total}</p>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
