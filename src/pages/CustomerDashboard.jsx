import React from 'react';
import { Link } from 'react-router-dom';

function CustomerDashboard() {
  return (
    <div className="theme-customer">
      <div className="dashboard">
        <aside className="dashboard__sidebar">
          <h1 className="logo">READY GO</h1>
          <ul className="dashboard__nav">
            <li><a href="#" className="nav-item active" data-tab="dashboard"><i className="fas fa-tachometer-alt"></i>Dashboard</a></li>
            <li><a href="#" className="nav-item" data-tab="map-search"><i className="fas fa-map-marked-alt"></i>Map Search</a></li>
            <li><a href="#" className="nav-item" data-tab="history"><i className="fas fa-history"></i>Booking History</a></li>
            <li><a href="#" className="nav-item" data-tab="verify"><i className="fas fa-id-card"></i>Verify Documents</a></li>
            <li><a href="#" className="nav-item" data-tab="payment"><i className="fas fa-credit-card"></i>Payment Methods</a></li>
            <li><a href="#" className="nav-item" data-tab="profile"><i className="fas fa-user-edit"></i>Edit Profile</a></li>
            <li><Link to="/" className="nav-item logout"><i className="fas fa-sign-out-alt"></i>Logout</Link></li>
          </ul>
        </aside>
        <main className="dashboard__main">
          {/* Dashboard tab content will be rendered here */}
        </main>
      </div>
    </div>
  );
}

export default CustomerDashboard;