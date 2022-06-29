import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from "./firebase"
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
      //will only run once when the app componenet loads.

      auth.onAuthStateChanged(authUser => {
        console.log("The user is >>", authUser);

        if(authUser) {
          //when the user just logged in
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
        } else {
          //when the user is logged out
          dispatch({
            type: 'SET_USER',
            user: null
          })
        }
      })
  }, [])

  return (
    <Router>
        <div className="app">
          <Routes>
            <Route path = "/" element={[<Header />, <Home />]} />
            <Route path="/checkout" element={[<Header />, <Checkout />]} />
            <Route path = "/login" element={<Login />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
