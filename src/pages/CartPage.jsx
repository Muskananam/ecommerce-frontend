import React from "react";
import "./Cart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();  // ✅ Use cart functions

  return (
    <div className="container my-5">
      <h2 className="text-center">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center">No items in the cart yet. Start shopping!</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="img-fluid rounded-start"
                    style={{ height: "150px", objectFit: "cover" }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Price: {item.price}</p>
                    <p className="card-text">Quantity: {item.quantity}</p>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeFromCart(item.id)}  // ✅ Remove item
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="text-center mt-4">
            <button className="btn btn-warning me-2" onClick={clearCart}>
              Clear Cart
            </button>
            <Link to="/products" className="btn btn-success">
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
