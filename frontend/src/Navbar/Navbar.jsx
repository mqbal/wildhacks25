import './Navbar.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from '../components/LoginButton';
import SearchButton from '../components/SearchButton';
import AboutButton from '../components/AboutButton';
import PlaceholderButton from '../components/PlaceholderButton';

function Navbar(){
    const [message, setMessage] = useState('')
    const { isAuthenticated, isLoading } = useAuth0()

  // Fetch data from Flask API
  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching data:', error))
  }, [])
    return(
        <div className='main'>
            <ul className='navbar'>
                <li><SearchButton/></li>
                <li><AboutButton/></li>
                <li><PlaceholderButton /></li>
                <li><PlaceholderButton /> </li>
            </ul>
        </div>
        
    );
}

export default Navbar;

