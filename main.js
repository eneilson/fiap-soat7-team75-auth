const authUser  = require('./src/auth-user');
const createUser  = require('./src/create-user');

exports.handler = async ({ body, method }) => {
  const data = JSON.parse(body);

  switch (method) {
    case'POST': 
      return authUser(data);
    case'PUT': 
      return createUser(data);
  }
};

