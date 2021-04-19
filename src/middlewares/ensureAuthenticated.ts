import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';

type IPayload = {
  sub: string;
};

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error('Token is missing');
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: userId } = verify(
      token,
      '8ad6c0fe5e869213a708351d1269393f'
    ) as IPayload;

    const usersRepository = new UsersRepository();

    const user = usersRepository.findById(userId);

    if (!user) {
      throw new Error("User doesn't not exists");
    }

    next();
  } catch {
    throw new Error('Invalid token.');
  }
}
