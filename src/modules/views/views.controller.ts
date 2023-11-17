import { Controller, Get, HttpStatus} from '@nestjs/common';
import { ViewsService } from './views.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('views')
export class ViewsController {
  constructor(private readonly viewsService: ViewsService) {}

  @Get()
  @ApiOperation({
    operationId: 'GetPageViews',
    description: 'Get page views',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get view details',
    type: Number,
  })
  async getPageViews() {
    return this.viewsService.getPageViews();
  }
}