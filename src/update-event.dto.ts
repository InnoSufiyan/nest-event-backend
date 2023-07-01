import { PartialType } from "@nestjs/mapped-types";
import { CreateEventDto } from "./create-event.dto";

/* eslint-disable prettier/prettier */
export class UpdateEventDto extends PartialType(CreateEventDto) {}
