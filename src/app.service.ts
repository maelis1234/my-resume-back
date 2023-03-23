import { Injectable } from '@nestjs/common'
import { PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient()

@Injectable()
export class AppService {
    getHello(): string {
        return 'Hello World!'
    }

    getUsers() {
        return prisma.user.findMany()
    }

    createUser(user: User) {
        return prisma.user.create({
            data: {
                id: user.id,
                name: user.name,
            },
        })
    }

    findUserById(id: number): Promise<User> {
        return prisma.user.findUnique({
            where: { id },
        })
    }
}
