import React from 'react';
import { Link } from 'react-router-dom';

function CustomerLogin() {
  return (
    <div className="form-page-container theme-customer">
      <div className="form-wrapper">
        <form>
          <h2>Customer Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="you@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="••••••••" />
          </div>

          {/* This Link will now navigate directly to the dashboard */}
          <Link to="/customer-dashboard" className="btn btn--full-width">
            Login
          </Link>
          
          <div className="form-links">
            <Link to="/customer-register">Don't have an account? Register</Link>
            <Link to="/owner-login">Login as an Owner</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CustomerLogin;