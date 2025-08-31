// src/pages/OwnerDashboard.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// --- NEW: A functional "Add Vehicle" form component ---
const AddVehicle = ({ onVehicleAdded }) => {
  // State for each input field
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [plate, setPlate] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload

    const newVehicle = { name, type, plate };

    // Send the new vehicle data to the server
    const response = await fetch('http://localhost:3001/vehicles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newVehicle),
    });

    const addedVehicle = await response.json();

    // Call the function passed from the parent to update the list
    onVehicleAdded(addedVehicle);

    // Clear the form fields
    setName('');
    setType('');
    setPlate('');
  };

  return (
    <div>
      <h2>Add New Vehicle</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Vehicle Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Vehicle Type (e.g., Car, Scooter)</label>
          <input
            type="text"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="plate">License Plate</label>
          <input
            type="text"
            id="plate"
            value={plate}
            onChange={(e) => setPlate(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">Add Vehicle</button>
      </form>
    </div>
  );
};
// --- End of new AddVehicle component ---

// --- UPDATED: ManageVehicles now handles adding a vehicle to its list ---
const ManageVehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  // Fetch initial data
  useEffect(() => {
    const fetchVehicles = async () => {
      const response = await fetch('http://localhost:3001/vehicles');
      const data = await response.json();
      setVehicles(data);
    };
    fetchVehicles();
  }, []);

  // This function is passed down to the AddVehicle component
  // It adds the new vehicle to the list without a page refresh
  const handleVehicleAdded = (newVehicle) => {
    setVehicles(currentVehicles => [...currentVehicles, newVehicle]);
  };

  return (
    <div>
      {/* Pass the handler function as a prop */}
      <AddVehicle onVehicleAdded={handleVehicleAdded} />
      <hr style={{margin: '2rem 0'}} />
      <h2>Manage Your Vehicles</h2>
      <ul>
        {vehicles.map(vehicle => (
          <li key={vehicle.id}>
            <strong>{vehicle.name}</strong> ({vehicle.type}) - Plate: {vehicle.plate}
          </li>
        ))}
      </ul>
    </div>
  );
};
// --- End of updated ManageVehicles component ---

// The main dashboard component that controls which tab is shown
function OwnerDashboard() {
  const [activeTab, setActiveTab] = useState('change'); // Default to 'change'

  const renderContent = () => {
    switch (activeTab) {
      // We will now render ManageVehicles which contains the form and the list
      case 'change':
        return <ManageVehicles />;
      // ... you can add other cases for other tabs later
      default:
        return <ManageVehicles />;
    }
  };

  return (
    <div className="theme-owner">
      <div className="dashboard">
        <aside className="dashboard__sidebar">
          <h1 className="logo">READY GO</h1>
          <ul className="dashboard__nav">
            {/* Simplified for this example */}
            <li>
              <button className={activeTab === 'change' ? 'nav-item active' : 'nav-item'} onClick={() => setActiveTab('change')}>
                Manage Vehicles
              </button>
            </li>
            <li>
              <Link to="/" className="nav-item logout">Logout</Link>
            </li>
          </ul>
        </aside>
        <main className="dashboard__main">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default OwnerDashboard;