import { Module } from '@nestjs/common';

import { COFFEE_BRAND } from '../common/constants';
import { CoffeeController } from './coffee.controller';
import { CoffeeService } from './coffee.service';

class MockCoffeeService {}

@Module({
  // providers: [{ provide: CoffeeService, useValue: new MockCoffeeService() }],
  providers: [
    CoffeeService,
    { provide: COFFEE_BRAND, useValue: ['Turky', 'French'] },
  ],
  controllers: [CoffeeController],
  // exports: [CoffeeService],
})
export class CoffeeModule {}
