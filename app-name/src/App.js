import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<div><Header/><Home/></div>} />
          <Route path="/checkout" element={<div><Header/><Checkout/></div>} />
        </Routes>
      </div>
    </Router>
    </>
    
  );
}

export default App;
