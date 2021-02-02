import { Module } from '@nestjs/common';

import { CoffeeRatingService } from './coffee-rating.service';

@Module({
  providers: [CoffeeRatingService],
  // imports: [CoffeeService],
})
export class CoffeeRatingModule {}
