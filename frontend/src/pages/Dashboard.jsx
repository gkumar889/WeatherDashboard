// src/pages/Dashboard.jsx
import React from 'react';
import WeatherCard from '../components/WeatherCard';
import LocationForm from '../components/LocationForm';

const Dashboard = () => {
  return (
    <div>
      <h1>Weather Dashboard</h1>
      <LocationForm />
      <div className="weather-cards">
        {/* Example of multiple WeatherCard components */}
        <WeatherCard />
        <WeatherCard />
      </div>
    </div>
  );
};

export default Dashboard;

