import React from 'react';
import './App.css';
import LifecycleA from './components/LifecycleA';
import ParentComp from './components/ParentComp';

function App() {
  return (
    <div className="App">
      <ParentComp />
    </div>
  );
}

export default App;
