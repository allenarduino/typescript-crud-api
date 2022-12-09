import connectDB from '../config/database';
import { User } from '../models/user';

const userRepository = connectDB.getRepository(User);

export interface IUserPayload {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export const getUsers = async (): Promise<Array<User>> => {
  return userRepository.find();
};

export const createUser = async (payload: IUserPayload): Promise<User> => {
  const user = new User();
  return userRepository.save({
    ...user,
    ...payload,
  });
};

export const getUser = async (id: number): Promise<User | null> => {
  const user = await userRepository.findOneBy({ id: id });
  if (!user) return null;
  return user;
};
