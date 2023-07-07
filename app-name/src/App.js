import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import Login from './Login.js';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<div><Header/><Home/></div>} />
          <Route path="/checkout" element={<div><Header/><Checkout/></div>} />
          <Route path="/login" element={<div><Login/></div>} />
        </Routes>
      </div>
    </Router>
    </>
    
  );
}

export default App;
