import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConfigType, EnvParams } from './validation.utils';

@Injectable()
export class CommonService {
  constructor(private readonly configService: ConfigService<ConfigType>) {
    console.log('loaded common');
  }

  getHello(): string {
    const value = this.configService.get(EnvParams.foo, 'Hello World!', {
      infer: true,
    });

    return value;
  }
}
