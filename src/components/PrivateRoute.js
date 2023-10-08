import React from 'react'
import Dashboard from '../pages/Dashboard';
import { Navigate } from 'react-router-dom';

function PrivateRoute({isLoggedIn}) {
  if(isLoggedIn) {
    return <Dashboard/>
  }
  else {
    return <Navigate to="/login" />
  }
}

export default PrivateRoute