import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Auth0Provider from './components/Auth0Provider';

render(
  <Auth0Provider
  domain="mle4d.auth0.com"
  client_id="KskVK9DHW3ZJtVjYXcnoBrZn6u9R7brE"
  redirect_uri="http://localhost:7890"
  >
    <App />
  </Auth0Provider>,
  
  document.getElementById('root')
);
