import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import configuration from './config/configuration';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ItemsModule,

    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: `${configService.get('database.uri')}`,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemsService],
})
export class AppModule {}
