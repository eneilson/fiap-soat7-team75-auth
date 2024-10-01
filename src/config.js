const { CognitoUserPool } = require('amazon-cognito-identity-js');

export const APP_USER_POOL = new CognitoUserPool({
  UserPoolId: String(process.env.UserPoolId),
  ClientId: String(process.env.ClientId),
});
