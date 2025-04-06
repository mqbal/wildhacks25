import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleLogin = async() => {
    await loginWithRedirect();
  };

  return (
    !isAuthenticated && (
      <button onClick={() => loginWithRedirect()}>
        Sign Up
      </button>
    )
   
  );
};

export default LoginButton;