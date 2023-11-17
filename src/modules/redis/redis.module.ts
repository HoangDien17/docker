import { Module } from '@nestjs/common';
import { createClient } from 'redis';
import * as config from 'config';
@Module({
  providers: [
    {
      provide: 'REDIS_OPTIONS',
      useValue: {
        url: config.get('redis.url'),
      },
    },
    {
      inject: ['REDIS_OPTIONS'],
      provide: 'REDIS_CLIENT',
      useFactory: async (options: { url: string }) => {
        const client = createClient(options);
        await client.connect();
        return client;
      },
    },
  ],
  exports: ['REDIS_CLIENT'],
})
export class RedisModule {}
