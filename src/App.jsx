import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import all your page components
import Welcome from './pages/Welcome.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import CustomerLogin from './pages/CustomerLogin.jsx';
import CustomerRegister from './pages/CustomerRegister.jsx';
import CustomerDashboard from './pages/CustomerDashboard.jsx';
import OwnerLogin from './pages/OwnerLogin.jsx';
import OwnerRegister from './pages/OwnerRegister.jsx';
import OwnerDashboard from './pages/OwnerDashboard.jsx';

function App() {
  // This component will ONLY render the router, nothing else.
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/customer-login" element={<CustomerLogin />} />
        <Route path="/owner-login" element={<OwnerLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/customer-register" element={<CustomerRegister />} />
        <Route path="/owner-register" element={<OwnerRegister />} />
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />
        <Route path="/owner-dashboard" element={<OwnerDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;