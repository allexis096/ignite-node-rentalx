import { ICreateUserDTO } from '../entities/dtos/ICreateUserDTO';
import { User } from '../entities/User';

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
}

export { IUsersRepository };
