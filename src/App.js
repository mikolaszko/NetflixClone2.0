import React, { useEffect } from 'react';
import HomeScreen from './Screens/HomeScreen.js';
import './App.css';
import LoginScreen from './Screens/LoginScreen.js';
import ProfileScreen from './Screens/ProfileScreen.js';
import {
  BrowserRouter as Router, Routes, Route,
} from "react-router-dom";
import { auth } from './firebase.js';
import { useDispatch, useSelector} from 'react-redux'
import{login, logout, selectUser} from "./features/userSlice.js"

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
        })
        );
      } else {
        dispatch(logout())
      }
    })

    return unsubscribe
  }, [dispatch])
  
  return (
    <div className="HomeScreen">

      <Router>
        {!user ? (
          <LoginScreen />
        ): (
        <Routes>
          <Route exact path="/" element={<HomeScreen/>}/>
          <Route exact path="/profile" element={<ProfileScreen />}/>
        </Routes>
        )}
    </Router>
    </div>
  );
}

export default App;
