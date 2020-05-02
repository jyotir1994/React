import React from 'react';
import './App.css';
import CounterTwo from './components/CounterTwo';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';

function App() {
  return (
    <div className="App">
      <CounterTwo
        render={(count, incrementCount) =>
          <ClickCounterTwo count={count} incrementCount={incrementCount} />}
      />
      <CounterTwo
        render={(count, incrementCount) =>
          <HoverCounterTwo count={count} incrementCount={incrementCount} />}
      />
    </div>
  );
}

export default App;
