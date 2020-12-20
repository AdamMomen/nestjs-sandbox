import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import Item from './item.interface';
import { ItemDTO } from './items.dto';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  ItemsService: ItemsService;
  @Get()
  async findAll(): Promise<Item[]> {
    return this.ItemsService.findAll();
  }
  @Get(':id')
  async findById(@Param() { id }: { id: string }): Promise<Item> {
    return this.ItemsService.findById(id);
  }
  @Post()
  async create(@Body() itemDTO: ItemDTO): Promise<Item> {
    return this.ItemsService.create(itemDTO);
  }
}
