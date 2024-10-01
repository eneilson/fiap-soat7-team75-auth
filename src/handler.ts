import { authUser } from './auth-user';
import { createUser } from './create-user';


export const handler = async ({ body, method }: { body: string, method: string }) => {
  const data = JSON.parse(body);

  switch (method) {
    case'POST': 
      return authUser(data);
    case'PUT': 
      return createUser(data);

  }

};

