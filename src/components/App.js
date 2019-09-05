import React from 'react';
import { useAuth0 } from '../components/Auth0Provider';
import AllUnicorns from '../containers/AllUnicorns';

export default function App() {
  const { isAuthenticated, user, auth0Client } = useAuth0();

  const login = () => auth0Client.loginWithRedirect();
  const logout = () => auth0Client.logout();

  return (
    <>
    {!isAuthenticated && <button onClick={login}>Login</button>}
    {isAuthenticated && <button onClick={logout}>Log Out</button>}
    <AllUnicorns />
    </>
  );
}

