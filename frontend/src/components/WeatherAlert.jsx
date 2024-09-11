// src/components/WeatherAlert.jsx
import React from 'react';
import styled from 'styled-components';

const Alert = styled.div`
  background-color: #ffeb3b;
  color: #000;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
`;

const WeatherAlert = ({ message }) => {
  return <Alert>{message}</Alert>;
};

export default WeatherAlert;

