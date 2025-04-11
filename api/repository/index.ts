import { injectable } from "inversify";
import { IUserRepository } from "../interface/repository";
import { User } from "../type";

@injectable()
export class UserRepository implements IUserRepository {
    constructor(){}

    getById(id: string): User {
        return {
            id: id,
            name: 'kanta sasaki',
            email: 'sasaki@sios.jp',
            address: '東京都港区....'

        }
    }

    create(user: User): void {
        // prisma.create({}) ...
    }
    put(user: User): void {
        // prisma.update({}) ...
    }
}