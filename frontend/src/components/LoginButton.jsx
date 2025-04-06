import { useAuth0 } from '@auth0/auth0-react';
import './component.css'

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleLogin = async() => {
    await loginWithRedirect();
  };

  return (
    !isAuthenticated && (
      <div>
        <button onClick={() => loginWithRedirect()}>
          Sign Up
        </button>
        <button onClick={() => loginWithRedirect()}>
          Log In
        </button>
      </div>
      
      
    )
   
  );
};

export default LoginButton;