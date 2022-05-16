import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// eslint-disable-next-line no-unused-vars
import bootstrap from 'bootstrap'

import reportWebVitals from './reportWebVitals';

import "./index.scss";

import {Dashboard} from "./dashboard/dashboard";
import {Console} from "./console/console";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<Dashboard />} />
        <Route path="console/*" element={<Console />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
