import { Inject, Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class ViewsService {
  constructor(
    @Inject('REDIS_CLIENT')
    private readonly redis: Redis
  ) {
    this.redis.set('pageView', 0);
  }

  async getPageViews() {
    return  this.redis.incr('pageView');
  }
  
}
