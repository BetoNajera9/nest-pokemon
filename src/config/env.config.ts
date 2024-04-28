import * as Joi from 'joi';
import 'dotenv/config';

export const EnvConfig = () => ({
  environment: process.env.NODE_ENV || 'env',
  mpngodb: process.env.MONGODB,
  port: process.env.PORT || 3000,
  defaultLimit: process.env.DEFAULT_LIMIT || 7,
});

export const envSchema = Joi.object({
  PORT: Joi.number().required(),
  NODE_ENV: Joi.string(),
  MONGODB: Joi.string().required(),
  DEFAULT_LIMIT: Joi.string().default(7),
});
