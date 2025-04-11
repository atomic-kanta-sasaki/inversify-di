import { User } from "../type";

export interface IUserService {
    get(id: string): User
    create(user: User): void
    put(user: User): void
}