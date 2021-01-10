import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router } from 'react-router-dom';
import Routes from './routers/Routes';
import AuthApi from './utils/AuthApi';

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <div className="App">
      <p>TRACK YOUR EXPENSES!</p>
      <AuthApi.Provider value={{auth, setAuth}}>
        <Router>
          <Routes />
        </Router>
      </AuthApi.Provider>
    </div>
  );
}

export default App;