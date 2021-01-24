import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('/flavour')
  findAll() {
    return 'All Flavour cofee';
  }

  @Get(':id')
  getByID(@Param('id') id: string) {
    return `this is coffe num ${id}`;
  }

  @Post()
  // Response status code
  @HttpCode(HttpStatus.GONE)
  createCoffee(@Body() body) {
    return body;
  }
}
