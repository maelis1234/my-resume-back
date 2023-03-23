import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { Contact, User } from '@prisma/client'
import { AppService } from './app.service'

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello()
    }

    @Get('users')
    getUsers(): any {
        return this.appService.getUsers()
    }

    @Post('users')
    createUser(@Body() user: User) {
        return this.appService.createUser(user)
    }

    @Post('contacts')
    createContact(@Body() contact: Contact) {
        return this.appService.createContact(contact)
    }

    @Get('users/:id')
    getUserById(@Param('id') id: number): Promise<User> {
        return this.appService.findUserById(id)
    }
}
