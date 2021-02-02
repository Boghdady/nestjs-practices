import { Module } from '@nestjs/common';

import { CoffeeController } from './coffee.controller';
import { CoffeeService } from './coffee.service';

class MockCoffeeService {}

// useClass provider
class ConfigService {}
class DevelopmentConfigService {}
class ProductionConfigService {}

@Module({
  // providers: [{ provide: CoffeeService, useValue: new MockCoffeeService() }],
  providers: [
    CoffeeService,
    // { provide: COFFEE_BRAND, useValue: ['Turky', 'French'] },
    {
      provide: CoffeeService,
      useClass:
        process.env.NODE_ENV === 'developement'
          ? DevelopmentConfigService
          : ProductionConfigService,
    },
  ],
  controllers: [CoffeeController],
  // exports: [CoffeeService],
})
export class CoffeeModule {}
