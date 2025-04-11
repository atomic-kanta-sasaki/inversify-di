import { inject, injectable } from "inversify";
import { IUserService } from "../interface/service";
import { UserRepository } from "../repository";
import { User } from "../type";
import TYPES from "../type/symbol/type";
import type { IUserRepository } from "../interface/repository";

@injectable()
export class UserService implements IUserService{
    constructor(
        @inject(TYPES.IUserRepository) private readonly repository: IUserRepository
    ){}
    
    get(userId: string){
        return this.repository.getById(userId)
    }

    create(user: User) {
        this.repository.create(user)
    }
}