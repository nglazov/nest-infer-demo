import { ConfigType, EnvParams, getFromLibrary } from '@app/common';
import { PathValue } from '@nestjs/config';

console.log(getFromLibrary());

const getFromApp = () => {
  type T1 = PathValue<ConfigType, EnvParams.foo>;

  const t: T1 = '42';

  return t;
};

console.log(getFromApp());
