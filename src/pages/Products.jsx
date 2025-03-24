import React from "react";
import "./Products.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useCart } from "../context/CartContext";  // ✅ Import Cart Context

// Import product images
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";

function Products() {
  const { addToCart } = useCart();  // ✅ Use addToCart from CartContext

  const products = [
    { id: 1, name: "White color top", price: "₹420", image: product1 },
    { id: 2, name: "Kurti", price: "₹850", image: product2 },
    { id: 3, name: "Crop-top", price: "₹600", image: product3 },
    { id: 4, name: "Printed top", price: "₹400", image: product4 },
    { id: 5, name: "Long top", price: "₹500", image: product5 },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">FAVORITE BRANDS FOR YOU</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(product)}  // ✅ Add to cart on click
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;