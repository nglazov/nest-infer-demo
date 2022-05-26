import { PathValue } from '@nestjs/config';
import { ConfigType, EnvParams } from './validation.utils';

export const getFromLibrary = () => {
  type T1 = PathValue<ConfigType, EnvParams.foo>;

  const t: T1 = '42';

  return t;
};
