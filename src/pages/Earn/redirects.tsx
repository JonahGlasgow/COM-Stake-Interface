import React from 'react'
import { Redirect } from 'react-router-dom'



// Redirects to Earn on landing 
export function RedirectPathToEarn() {
    return <Redirect to='/COM'/>
  }

  // Redirects to stake but only replace the pathname
export function RedirectToStake() {
    return <Redirect to='/COM/0x1B4052d98fb1888C2Bf3B8d3b930e0aFf8A910dF'/>
  }
  
  