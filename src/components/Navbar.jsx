import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-left d-flex align-items-center">
          <Link className="navbar-brand" to="/">Pizzería Mamma Mía!</Link>
          <Link className="btn btn-outline-light mx-2" to="/">
            <span role="img" aria-label="home">🍕</span> Home
          </Link>
          {token ? (
            <>
              <Link className="btn btn-outline-light mx-2" to="/profile">
                <span role="img" aria-label="profile">🔓</span> Profile
              </Link>
              <Link className="btn btn-outline-light mx-2" to="/logout">
                <span role="img" aria-label="logout">🔒</span> Logout
              </Link>
            </>
          ) : (
            <>
              <Link className="btn btn-outline-light mx-2" to="/login">
                <span role="img" aria-label="login">🔐</span> Login
              </Link>
              <Link className="btn btn-outline-light mx-2 register-btn" to="/register">
                <span role="img" aria-label="register">🔐</span> Register
              </Link>
            </>
          )}
        </div>
        <div className="navbar-right ml-auto">
          <button className="btn btn-warning">
            <span role="img" aria-label="cart">🛒</span> Total: ${total.toLocaleString()}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
