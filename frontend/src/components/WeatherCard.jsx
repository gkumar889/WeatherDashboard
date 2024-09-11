// src/components/WeatherCard.jsx
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const WeatherCard = () => {
  return (
    <Card>
      <h3>Location Name</h3>
      <p>Temperature: 25°C</p>
      <p>Condition: Sunny</p>
    </Card>
  );
};

export default WeatherCard;

