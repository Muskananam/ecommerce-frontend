import React from "react";
import "./Cart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useCart } from "../context/CartContext.jsx"; // Import useCart hook
import { Link } from "react-router-dom";

function Cart() {
  const { cart } = useCart();  // Get cart items from context

  return (
    <div className="container my-5">
      <h2 className="text-center">Your Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center">
          <p>No items in the cart yet. Start shopping!</p>
          <Link to="/products" className="btn btn-primary">Continue Shopping</Link>
        </div>
      ) : (
        <div className="row">
          {cart.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.name}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
