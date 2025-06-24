import React from 'react';
import { useCart } from '../../context/CartContext';

const Cart = () => {
  const { cartItems, increaseQty, decreaseQty, clearCart, totalPrice } = useCart();

  const handlePayment = () => {
    alert("Payment Successful ✅");
    clearCart(); 
  };

  if (cartItems.length === 0) {
    return <div className="text-center mt-5"><h3>Your cart is empty 🛒</h3></div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Your Cart</h2>
      {cartItems.map(item => (
        <div key={item._id} className="card mb-3 p-3">
          <div className="row">
            <div className="col-md-3">
              <img src={item.image} alt={item.name} className="img-fluid rounded"/>
            </div>
            <div className="col-md-6">
              <h4>{item.name}</h4>
              <p><b>Price:</b> ₹{item.ticketprice}</p>
              <p><b>Quantity:</b> {item.quantity}</p>
              <div>
                <button onClick={() => decreaseQty(item._id)} className="btn btn-danger me-2">-</button>
                <button onClick={() => increaseQty(item._id)} className="btn btn-success">+</button>
              </div>
            </div>
            <div className="col-md-3 text-end">
              <h5>Total: ₹{item.quantity * item.ticketprice}</h5>
            </div>
          </div>
        </div>
      ))}
      <hr />
      <div className="d-flex justify-content-between align-items-center">
        <h3>Grand Total: ₹{totalPrice}</h3>
        <div>
          <button className="btn btn-outline-danger me-3" onClick={clearCart}>
            Clear Cart
          </button>
          <button className="btn btn-primary" onClick={handlePayment}>
            Pay now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;