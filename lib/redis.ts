import { Redis } from "@upstash/redis";

const hasRedisEnv =
  !!process.env.UPSTASH_REDIS_REST_URL && !!process.env.UPSTASH_REDIS_REST_TOKEN;

export const redis = hasRedisEnv ? Redis.fromEnv() : null;