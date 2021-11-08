import React from 'react';
import './App.css';
import Login from './Login';
import Dashboard from './Dashboard';

const code = new URLSearchParams(window.location.search).get('code')

function App() {
  return (
    <div className="App">
      <h1>Welcome.</h1>
      {code ? <Dashboard code={code} /> : <Login />}
      <p>Click on the button to get started.</p>
    </div>
  );
}

export default App;
