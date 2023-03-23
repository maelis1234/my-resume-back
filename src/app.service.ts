import { Injectable } from '@nestjs/common'
import { Contact, PrismaClient, User } from '@prisma/client'

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

    createContact(contact: Contact) {
        return prisma.contact.create({
            data: {
                id: contact.id,
                firstname: contact.firstname,
                lastname: contact.lastname,
                email: contact.email,
                message: contact.message,
            },
        })
    }

    findUserById(id: number): Promise<User> {
        return prisma.user.findUnique({
            where: { id },
        })
    }
}
