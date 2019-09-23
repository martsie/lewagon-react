import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CurrencyConversionScreen from './screen/CurrencyConversionScreen';
import HomeScreen from './screen/HomeScreen';

function App() {
  return (
    <div className="app">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/currency-converter/AUD">Currency Converter</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/currency-converter/:currencyCode/:currencyCode2" component={CurrencyConversionScreen} />
      </Router>
    </div>
  );
}

export default App;
