import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://eu2-natural-elf-30989.upstash.io',
  token: process.env.REDIS_KEY!,
})