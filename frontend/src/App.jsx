// src/App.jsx
import React from 'react';
import Dashboard from './pages/Dashboard';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <div className="container">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;

