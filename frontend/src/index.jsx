import React, { useEffect, useState } from 'react';
//import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css'
import Navbar from './Navbar/Navbar.jsx';
function Index(){
    return(
        // <Router>
        //     <div className='navBar'>
        //         {/* <Navbar /> */}
        //     </div>
        // </Router>
        <div className='main'>
            <div className='banner'>
                <ul className='header'>
                    <li>About Us</li>
                    <li>Search</li>
                    <li>Get started</li>
                    <li>Login</li>
                </ul>
            </div>
            <div className='content'>
                <div className='desc'>
                    <h2>Food On The Go!!</h2>
                    <h2>This is your one stoop for all your meal planning...</h2>
                </div>
            </div>
            <div className='start'>
                <div className='signUp'>
                    <button>Sign Up</button>
                </div>
            </div>
            <div className='footer'>

            </div>
        </div>
         
    );
}

export default Index;