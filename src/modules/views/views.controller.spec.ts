import { Test, TestingModule } from '@nestjs/testing';
import { ViewsController } from './views.controller';
import { ViewsService } from './views.service';

describe('ViewsController', () => {
  let controller: ViewsController;

  const mockedViewsService = {
    getPageViews: jest.fn(),
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ViewsController],
      providers: [ViewsService],
    })
    .overrideProvider(ViewsService)
    .useValue(mockedViewsService)
    .compile();

    controller = module.get<ViewsController>(ViewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
