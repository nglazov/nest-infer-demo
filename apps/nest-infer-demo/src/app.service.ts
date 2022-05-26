import { ConfigType, EnvParams } from '@app/common';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService<ConfigType>) {}

  getHello(): string {
    const value = this.configService.get(EnvParams.foo, 'Hello World!', {
      infer: true,
    });

    return value;
  }
}
