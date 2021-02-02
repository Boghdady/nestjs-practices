import { Module } from '@nestjs/common';
import { ConnectionOptions } from 'typeorm';

// Dynamic module

@Module({})
export class DatabaseModule {
  static register(options: ConnectionOptions): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [
        { provide: 'CONNECTION', useValue: ConnectionOptions(options) },
      ],
    };
  }
}
