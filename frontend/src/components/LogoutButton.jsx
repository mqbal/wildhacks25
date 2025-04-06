import { useAuth0 } from '@auth0/auth0-react';
import './component.css'

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button className="logOut" onClick={() => logout({ returnTo: window.location.origin })}>
        Sign Out
      </button>
    )
   
  );
};

export default LogoutButton;