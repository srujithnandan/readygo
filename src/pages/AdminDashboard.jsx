import React from 'react';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  return (
    <div>
      <div className="dashboard">
        <aside className="dashboard__sidebar">
          <h1 className="logo">ADMIN</h1>
          <ul className="dashboard__nav">
            <li><a href="#" className="nav-item active" data-tab="overview"><i className="fas fa-chart-pie"></i>Overview</a></li>
            <li><a href="#" className="nav-item" data-tab="verification"><i className="fas fa-user-check"></i>Document Verification</a></li>
            <li><a href="#" className="nav-item" data-tab="users"><i className="fas fa-users-cog"></i>User Management</a></li>
            <li><a href="#" className="nav-item" data-tab="revenue"><i className="fas fa-wallet"></i>Platform Revenue</a></li>
            <li><a href="#" className="nav-item" data-tab="complaints"><i className="fas fa-exclamation-circle"></i>Complaints</a></li>
            <li><a href="#" className="nav-item" data-tab="feedback"><i className="fas fa-comment-dots"></i>App Feedback</a></li>
            <li><a href="#" className="nav-item" data-tab="settings"><i className="fas fa-cogs"></i>Platform Settings</a></li>
            <li><Link to="/admin-login" className="nav-item logout"><i className="fas fa-sign-out-alt"></i>Logout</Link></li>
          </ul>
        </aside>
        <main className="dashboard__main">
          <div id="overview" className="tab-content"></div>
          <div id="verification" className="tab-content"></div>
          <div id="users" className="tab-content"></div>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;