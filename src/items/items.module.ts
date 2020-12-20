import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemSchema } from './item.schema';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }])],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
