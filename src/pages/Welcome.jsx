import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div className="welcome-container">
      <h1>READY GO</h1>
      <p className="tagline">Your Adventure Awaits. Rent a Vehicle Today.</p>
      <nav className="nav-buttons">
        <Link to="/customer-login" className="btn btn-customer">I'm a Customer</Link>
        <Link to="/owner-login" className="btn btn-owner">I'm an Owner</Link>
        <Link to="/admin-login" className="btn btn-admin">Login as Admin</Link>
      </nav>
    </div>
  );
}

export default Welcome;