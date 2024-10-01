const { CognitoUserPool } = require('amazon-cognito-identity-js');

exports.APP_USER_POOL = new CognitoUserPool({
  UserPoolId: 'us-east-1_ULx3RiNZI',
  ClientId: '38797i5cp444p43bskrai4un58',
});
