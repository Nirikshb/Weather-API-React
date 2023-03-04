import React from 'react'
import { useState } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { PATHS_MAP } from './Paths';
import LandingPage from './components/landingpage';
import WeatherData from './components/weatherdata';
import uniqid from 'uniqid';

const App = () => {
  return (
    <Routes>
      {PATHS_MAP.map((pathObj)=>(
        <Route key={uniqid()} path={pathObj.path} element={pathObj.component}
        />
      ))}
    </Routes>

  )
}

export default App;