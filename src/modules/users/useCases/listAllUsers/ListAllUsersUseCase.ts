import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    
    const userIsAdmin = this.usersRepository.findById(user_id);

    if (!userIsAdmin) {
      throw new Error(`User does not exists`);
    }

    if (!userIsAdmin.admin){
      throw new Error(`User ${userIsAdmin.name} is not a admin`);
    }

    const users = this.usersRepository.list();

    return users
  }
}

export { ListAllUsersUseCase };
