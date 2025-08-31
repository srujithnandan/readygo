import React from 'react';
import { Link } from 'react-router-dom';

function OwnerRegister() {
  return (
    <div className="form-page-container theme-owner">
      <div className="form-wrapper">
        <form action="/owner-register" method="post">
          <h2>Create Owner Account</h2>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Create Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="btn btn--full-width">Register</button>
          <div className="form-links">
            <Link to="/owner-login">Already have an account? Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OwnerRegister;