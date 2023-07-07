import { useEffect } from 'react';
import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import Login from './Login.js';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {auth} from './firebase.js'
import { useStateValue } from './StateProvider';
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>',authUser);
      if (authUser){
        //user signed in or the user was already signed in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
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
