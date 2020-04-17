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
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreetings from './components/UserGreetings';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';

function App() {
  return (
    <div className="App">
      <h1 className={'error'}>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline />
      <Stylesheet primary={true}/>
      {/* <NameList /> */}
      {/* <UserGreetings /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <ClassClick /> */}
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
