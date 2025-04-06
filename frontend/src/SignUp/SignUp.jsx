import React from "react";
import { useState, useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import HomePage from "../components/HomePage";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

function SignUp(){
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
        <div className="main">
            {!isAuthenticated ? (
                <Routes>
                <Route
                    path="*"
                    element={
                    <div className="login">
                        <LoginButton />
                        <p>Please log in/Sign Up to continue</p>
                    </div>
                    }
                />
                </Routes>
                ) : (
                <>
                <LogoutButton />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
                </>
            )} 
        </div>
        
    );
}

export default SignUp;
