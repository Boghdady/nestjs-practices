import { Module } from '@nestjs/common';

import { CoffeeService } from '../coffee/coffee.service';
import { CoffeeRatingService } from './coffee-rating.service';

@Module({
  providers: [CoffeeRatingService],
  imports: [CoffeeService],
})
export class CoffeeRatingModule {}
