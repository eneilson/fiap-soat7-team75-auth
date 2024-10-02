const authUser  = require('./src/auth-user');
const createUser  = require('./src/create-user');

exports.handler = async ({ body, method }) => {
  const data = typeof body === 'string' ? JSON.parse(body) : body;

  switch (method) {
    case'POST': 
      return JSON.stringify(await authUser(data));
    case'PUT': 
      return JSON.stringify(await createUser(data));
    default: 
      return JSON.stringify({ fail: 'unknown method', body });
  }
};

