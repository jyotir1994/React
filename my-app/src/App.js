import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

function App() {
  return (
    <div className="App">
      <ClassClick />
      {/* <FunctionClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name='A' no='1'>
        <p>This is children props</p>
      </Greet>
      <Greet name='B' no='2'/>
      <button>Action</button>
      <Greet name='C' no='3'/>
      <Welcome name='A' no='1'/>
      <Welcome name='B' no='2'/>
      <Welcome name='C' no='3'/> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
