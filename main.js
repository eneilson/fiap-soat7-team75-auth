const authUser  = require('./src/auth-user');
const createUser  = require('./src/create-user');

exports.handler = async ({ body, method, ...request }) => {
  const data = typeof body === 'string' ? JSON.parse(body) : body;

  switch (method) {
    case'POST': 
      return authUser(data);
    case'PUT': 
      return createUser(data);
    default: 
      return { fail: 'unknown method', request };
  }
};

