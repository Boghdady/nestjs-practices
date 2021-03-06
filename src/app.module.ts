import { Module } from '@nestjs/common';

import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';
import { CoffeeController } from './coffee/coffee.controller';
import { CoffeeModule } from './coffee/coffee.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [CoffeeModule, CoffeeRatingModule, DatabaseModule],
  controllers: [CoffeeController],
  providers: [],
})
export class AppModule {}
