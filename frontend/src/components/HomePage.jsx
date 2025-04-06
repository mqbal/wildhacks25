import React from 'react';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Router, Route, Routes } from 'react-router-dom';

const HomePage = () => {
  const { user, isAuthenticated } = useAuth0();
  const [query, setQuery] = useState('');
  const handleInputChange = (e) =>{
    setQuery(e.target.value);
  }
  const handleSearch = () =>{
    alert('Searching for restaurants...');
    setQuery('');
  }
  // return (
  //   isAuthenticated && (
  //     <div className="home-page">
  //       {user?.picture && <img src={user.picture} alt={user?.name} />}
  //       <h2>{user?.name}</h2>
  //       <ul> 
  //         {Object.keys(user).map((objKey, i) => (
  //           <li key={i}>{objKey}: {user[objKey]}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   )
  // );
  return (
    isAuthenticated && (
      <div className="home-page">
        {/* {user?.picture && <img src={user.picture} alt={user?.name} />}
        <h2>{user?.name}</h2> */}
        <div className='searchBar' >
          <input 
          type="text" 
          placeholder='Search' 
          id='search'
          value={query}
          onChange={handleInputChange}
          ></input>
          <button type='submit' onClick={handleSearch}>Submit</button>
        </div>
        
        <div className='homePage'>
          <img src={user.picture} alt={user?.name}/>
          <h2>Username: {user?.name}</h2>
        </div>
      </div>
    )
  );
};

export default HomePage;