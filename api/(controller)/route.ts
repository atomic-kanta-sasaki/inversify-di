import { NextResponse } from "next/server"
import { User } from "../type"
import { diContainer } from "../../../inversify.config"
import { IUserService } from "../interface/service"
import TYPES from "../type/symbol/type"

export const GET = () => {
    const service = diContainer.get<IUserService>(TYPES.IUserService)
    const user = service.get('user0001')
    return NextResponse.json(user)
}

export const POST = () => {
    const service = diContainer.get<IUserService>(TYPES.IUserService)
    const body: User = {
        id: 'user0002',
        name: 'sasaki2',
        address: '東京都港区...',
        email: 'sasaki2@sios.jp'
    }
    const user = service.create(body)
    return NextResponse.json('ok')
}

export const PUT = () => {
    const service = diContainer.get<IUserService>(TYPES.IUserService)

    const body: User = {
        id: 'user0002',
        name: 'sasaki2',
        address: '東京都港区...',
        email: 'sasaki2@sios.jp'
    }

    const user = service.put(body)

    return NextResponse.json('ok')
}