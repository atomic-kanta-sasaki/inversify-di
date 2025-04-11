import { User } from "../type";

export interface IUserRepository {
    getById(id: string): User,
    create(user: User): void,
}