import { Body, Controller, Get, Post } from '@nestjs/common'
import { Contact } from '@prisma/client'
import { AppService } from './app.service'

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello()
    }

    @Post('contacts')
    createContact(@Body() contact: Contact) {
        return this.appService.createContact(contact)
    }
}
