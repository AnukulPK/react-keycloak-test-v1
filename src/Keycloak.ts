import Keycloak from 'keycloak-js';
const keycloak = Keycloak({
  url: 'http://localhost:8080/auth',
  realm: 'keycloak-react-auth',
  clientId: 'React-auth',
});

export default keycloak;
