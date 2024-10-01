import { CognitoUserPool } from 'amazon-cognito-identity-js';

export const APP_USER_POOL = new CognitoUserPool({
  UserPoolId: 'us-east-1_XXXXXX',
  ClientId: 'XXXXXXXXXX',
});
