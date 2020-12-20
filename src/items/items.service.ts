import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './item.schema';
import { ItemDTO } from './items.dto';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

  create(item: ItemDTO) {
    const newItem = new this.itemModel(item);
    return newItem.save();
  }
  async findById(id: string): Promise<Item> {
    return id.match(/^[0-9a-fA-F]{24}$/)
      ? await this.itemModel.findOne({ _id: id })
      : null;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      return await this.itemModel.findOne({ _id: id });
    }
  }

  async findAll(): Promise<Item[]> {
    return this.itemModel.find().exec();
  }
}
