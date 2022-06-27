import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Scope from './variables/01 scope';
import ScopeChain from './variables/02 scope_chain';
import Hoisting from './variables/03 hoisting';
import Closure from './variables/04 closure';
import Prototype from './variables/05 prototype';
import This from './variables/06 this';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
