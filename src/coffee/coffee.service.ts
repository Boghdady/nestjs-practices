import { Inject, Injectable } from '@nestjs/common';

import { COFFEE_BRAND } from '../common/constants';

@Injectable()
export class CoffeeService {
  constructor(@Inject(COFFEE_BRAND) coffeeBrands: string[]) {
    console.log(coffeeBrands);
  }
}
