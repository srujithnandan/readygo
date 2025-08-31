import React from 'react';
import { Link } from 'react-router-dom';

function OwnerLogin() {
  return (
    <div className="form-page-container theme-owner">
      <div className="form-wrapper">
        <form action="/owner-login" method="post">
          <h2>Owner Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="you@example.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="••••••••" required />
          </div>
          {/* In React Router, we use a Link for navigation */}
          <Link to="/owner-dashboard" className="btn btn--full-width">Login</Link>
          <div className="form-links">
            <Link to="/owner-register">Don't have an account? Register</Link>
            <Link to="/customer-login">Login as a Customer</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OwnerLogin;