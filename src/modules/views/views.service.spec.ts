import { Test, TestingModule } from '@nestjs/testing';
import { ViewsService } from './views.service';

describe('ViewsService', () => {
  let service: ViewsService;

  const mockedRedisClient = {
    set: jest.fn(),
    incr: jest.fn().mockResolvedValue(3)
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ViewsService,
        {
          provide: 'REDIS_CLIENT',
          useValue: mockedRedisClient
        }
      ],
    }).compile();

    service = module.get<ViewsService>(ViewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getPageViews', () => {
    it('should return data', async () => {
      expect(await service.getPageViews()).toBe(3)
    })
  })
});
