import * as yup from 'yup';

export enum EnvParams {
  foo = 'foo',
}

export const schema = yup.object({
  [EnvParams.foo]: yup.string(),
});

export type ConfigType = yup.InferType<typeof schema>;

export const validate = (config: Record<string, unknown>) => {
  const result = schema.validateSync(config);

  return result;
};
