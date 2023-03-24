import { Injectable } from '@nestjs/common'
import { Contact, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

@Injectable()
export class AppService {
    getHello(): string {
        return 'Hello World!'
    }

    createContact(contact: Contact) {
        const randomId = Math.floor(Math.random() * 1000)
        const newContact = { ...contact, id: randomId }
        return prisma.contact.create({
            data: newContact,
        })
    }
}
