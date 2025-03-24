import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/CartPage";
import Signin from "./pages/Signin";     // Import Signin page
import Signup from "./pages/Signup";     // Import Signup page
import NotFound from "./pages/NotFound";
import { CartProvider } from "./context/CartContext";  // ✅ Correct import
import "./App.css";

function App() {
  return (
    <CartProvider>   {/* Wrap the entire app with CartProvider */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
