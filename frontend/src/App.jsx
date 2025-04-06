import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import SearchButton from './components/SearchButton'
import AboutButton from './components/AboutButton'
import HomePage from './components/HomePage'
import PlaceholderButton from './components/PlaceholderButton'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Navbar from './Navbar/Navbar.jsx'
import SignUp from './SignUp/SignUp.jsx'
import Header from './components/Header.jsx'
function App() {

  return (
    <main className="App">
      <div className='nav'>
        <Navbar />
      </div>

      <div className='header'>
        <Header />
      </div>

      <div className='signUp'>
        <SignUp />
      </div>

  
     {/*  <HomePage /> */}
   

      {/* <footer>
        <p>Created for Wildhacks 2025</p>
        <p>
        <a href="https://devpost.com" target="_blank" rel="noopener noreferrer">
          View our Devpost Project
        </a>
        </p>
      </footer> */}
    </main>
  )
}

export default App;