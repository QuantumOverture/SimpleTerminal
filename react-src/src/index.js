import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// Import init function from "@neutralinojs/lib"
import { init } from "@neutralinojs/lib"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

init();
