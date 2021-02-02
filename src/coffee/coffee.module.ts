import { Module } from '@nestjs/common';

import { CoffeeController } from './coffee.controller';
import { CoffeeService } from './coffee.service';

class MockCoffeeService {}

@Module({
  providers: [{ provide: CoffeeService, useValue: new MockCoffeeService() }],
  controllers: [CoffeeController],
  // exports: [CoffeeService],
})
export class CoffeeModule {}
