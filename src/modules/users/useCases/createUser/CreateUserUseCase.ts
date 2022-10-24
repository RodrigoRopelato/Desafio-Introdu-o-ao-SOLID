import { UsersRepository } from "modules/users/repositories/implementations/UsersRepository";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    
    
    const userAlreadyExists = this.usersRepository.findByEmail(email); 

    if (userAlreadyExists) {
      throw new Error(`User email ${email} already exists`);
    }
      
    const newUser =  this.usersRepository.create({email, name});  
    
    return newUser;
  }

}
export { CreateUserUseCase };
