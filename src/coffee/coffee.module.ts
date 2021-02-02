import { Injectable, Module } from '@nestjs/common';

import { CoffeeController } from './coffee.controller';
import { CoffeeService } from './coffee.service';

// class MockCoffeeService {}

// // useClass provider
// class ConfigService {}
// class DevelopmentConfigService {}
// class ProductionConfigService {}

// useFactory provider
@Injectable()
export class CoffeeBrandFactory {
  create() {
    return ['Turky', 'Italy'];
  }
}

@Module({
  // providers: [{ provide: CoffeeService, useValue: new MockCoffeeService() }],
  providers: [
    CoffeeService,
    // 1) useValue
    // { provide: COFFEE_BRAND, useValue: ['Turky', 'French'] },
    // {

    // 2) useClass
    //   provide: CoffeeService,
    //   useClass:
    //     process.env.NODE_ENV === 'developement'
    //       ? DevelopmentConfigService
    //       : ProductionConfigService,
    // },

    // 3) useFactory
    {
      provide: COFFEE_BRAND,
      useFactory: (coffeeFactoryBrand: CoffeeFactoryBrand) =>
        coffeeFactoryBrand.create(),
      inject: [CoffeeBrandFactory],
    },
  ],
  controllers: [CoffeeController],
  // exports: [CoffeeService],
})
export class CoffeeModule {}
