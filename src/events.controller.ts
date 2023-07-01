/* eslint-disable prettier/prettier */
import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Param,
    Patch,
    Post,
    Put,
} from '@nestjs/common';
import { CreateEventDto } from './create-event.dto';
import { UpdateEventDto } from './update-event.dto';
import { Event } from './event.entity';

@Controller('/events')
export class EventsController {
    private events: Event[] = []
    @Get()
    getAll() {
        return this.events
    }
    @Get(':id')
    getOne(@Param('id') id) {
        const event = this.events.find((event) => event.id === parseInt(id))
        return event
    }
    @Post()
    create(@Body() input: CreateEventDto) {
        this.events.push({
            id: this.events.length + 1,
            ...input,
            when: new Date()
        })
        t
        return this.events
    }
    @Patch(':id')
    update(@Param('id') id, @Body() input: UpdateEventDto) {

        return {
            id,
            name: input.name
        }
    }
    @Delete(':id')
    @HttpCode(204)
    remove(@Param('id') id) { }
}
