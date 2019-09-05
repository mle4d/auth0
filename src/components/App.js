import React from 'react';
import { useAuth0 } from '../components/Auth0Provider';

export default function App() {
  const { isAuthenticated, user, loading, auth0Client } = useAuth0();
  // if(!loading && !isAutheticated) {
  //   auth0Client.loginAwithRedirect();
  // }

  const login = () => auth0Client.loginWithRedirect();
  const logout = () => auth0Client.logout();

  return (
    <>
    {!isAuthenticated && <button onClick={login}>Login</button>}
    {isAuthenticated && <button onClick={logout}>Log Out</button>}
    </>
  );
}

