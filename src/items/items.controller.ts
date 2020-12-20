import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ItemDTO } from './items.dto';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'All Items';
  }
  @Get(':id')
  findById(@Param() param): string {
    return param.id;
  }
  @Post()
  create(@Body() itemDTO: ItemDTO): string {
    return `Name: ${itemDTO.name} Desc: ${itemDTO.description} Quantity: ${itemDTO.quantity}`;
  }
}
