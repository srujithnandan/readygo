import React from 'react';
import { Link } from 'react-router-dom';

function AdminLogin() {
  return (
    <div className="form-page-container">
      <div className="form-wrapper">
        <form action="/admin-login" method="post">
          <h2>READY GO - Admin Panel</h2>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <Link to="/admin-dashboard" className="btn btn--full-width">Login</Link>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;