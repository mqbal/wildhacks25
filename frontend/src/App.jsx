import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import SearchButton from './components/SearchButton'
import AboutButton from './components/AboutButton'
import HomePage from './components/HomePage'
import PlaceholderButton from './components/PlaceholderButton'
import { Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar.jsx'

function App() {
  const [message, setMessage] = useState('')
  const { isAuthenticated, isLoading } = useAuth0()

  // Fetch data from Flask API
  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching data:', error))
  }, [])

  return (
    <main className="App">
      <div >
        <Navbar />
      </div>
      {/* <header>
        <SearchButton />
        <AboutButton />
        <PlaceholderButton />
        <PlaceholderButton />
      </header>

      {/* {!isAuthenticated ? (
        <Routes>
          <Route
            path="*"
            element={
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <LoginButton />
                <p>Please log in to continue</p>
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
      )} */}

      
      {/* <LoginButton />
      <LogoutButton />
      <HomePage /> */}
   

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