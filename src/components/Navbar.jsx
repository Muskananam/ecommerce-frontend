import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from '../assets/logo.jpg';  // Logo for Signup

function Navbar() {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', search);  // Replace with actual search logic
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        {/* Brand name without logo */}
        <NavLink className="navbar-brand" to="/">
          Anam Designs
        </NavLink>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products" activeClassName="active">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart" activeClassName="active">Cart</NavLink>
            </li>
          </ul>

          {/* Search form */}
          <form className="d-flex me-3" onSubmit={handleSearch}>
            <input 
              className="form-control me-2" 
              type="search" 
              placeholder="Search" 
              aria-label="Search" 
              value={search} 
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>

          {/* Signup with logo */}
          <NavLink to="/signup" className="d-flex align-items-center text-decoration-none">
            <img src={logo} alt="Signup Logo" style={{ height: '25px', marginRight: '5px' }} />
            <span className="nav-link">Signup</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
