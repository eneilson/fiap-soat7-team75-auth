const { AuthenticationDetails, CognitoUser }  = require('amazon-cognito-identity-js');
const { APP_USER_POOL }  = require('./config');

export const authUser = ({ username, password }) => {

  const loginData = new AuthenticationDetails({
    Username: username,
    Password: password,
  });

  const cognitoUser = new CognitoUser({
    Username: username,
    Pool: APP_USER_POOL,
  });

  return new Promise((resolve, reject) => {
    cognitoUser.authenticateUser(loginData, {
      onSuccess: (result) => {
        resolve({
          statusCode: 200,
          body: result.getAccessToken().getJwtToken(),
        });
      },
      onFailure: (err) => {
        reject({
          statusCode: 403,
          body: err.message,
        });
      },
    });
  });
}