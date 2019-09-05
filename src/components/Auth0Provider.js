import React from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';
import { userInfo } from 'os';

const DEFAULT_REDIRECT_CALLBACK = () => {
  window.history.replaceState({}, 
    docmument.title, window.location.pathname);
};

export const Auth0Context = React.createContext();
export const useAuth0 = () => useContext(Auth0Context);

export default function Auth0Provider ({ 
  children, 
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  ...initOptions }); {
    const [isAuthenticated, updateIsAuthenticated] = useState(false);
    const [user, setUser] = useState();
    const [auth0Client, setAuth0Client] = useState();
    const [loading, updateLoading] = useState(true);

    useEffect(() => {
      const initAuth0 = async () => {
        const auth0 = createAuth0Client(initOptions);
        setAuth0Client(auth0);

        if(window.location.search('code=')) {
          const { appState } = await auth0.handleRedirectCallback();
          onRedirectCallback(appState);
        }

        const isAuthenticated = await auth0.isAuthenticated();
        updateIsAuthenticated(isAutheticated);

        if(isAutheticated) {
          const user = await auth0.getUser();
          setUser(user);
        }
        updateLoading(false);
      };
      initAuth0();
    }, []);
    return (
      <Auth0Context.Provider
      value={{isAutheticated, user, auth0Client, loading}}>

      </Auth0Context.Provider>
    )
}
