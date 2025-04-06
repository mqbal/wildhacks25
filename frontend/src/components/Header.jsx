
import { useAuth0 } from '@auth0/auth0-react';
import React from "react";
import './component.css'


function Header(){
    const { isAuthenticated } = useAuth0();
    return !isAuthenticated && (
        <div className="top">
            <h2>Food On The Go!</h2>
            <h2>Get all your meal planning
                 done without hassle</h2>
        </div>
    );
}

export default Header;