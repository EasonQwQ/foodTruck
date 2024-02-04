import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FoodTruckService } from './food-truck.service';
import { CreateFoodTruckDto } from './dto/create-food-truck.dto';
import { UpdateFoodTruckDto } from './dto/update-food-truck.dto';
import { ApiProperty, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  Pagination,
  PaginationParams,
} from './../decorators/pagination.decorator';
import { Public } from './../decorators/index';

class FoodTruckResponse {
  @ApiProperty({ type: [CreateFoodTruckDto] })
  data: CreateFoodTruckDto[];

  @ApiProperty()
  total: number;

  @ApiProperty()
  success: boolean;
}

@Public()
@ApiTags('food-truck')
@Controller('food-truck')
export class FoodTruckController {
  constructor(private readonly foodTruckService: FoodTruckService) {}

  @Post('/create')
  create(@Body() createFoodTruckDto: CreateFoodTruckDto) {
    return this.foodTruckService.create(createFoodTruckDto);
  }

  @Get('/listAll')
  @ApiResponse({
    status: 200,
    description: 'The list of food trucks',
    type: FoodTruckResponse,
  })
  @ApiQuery({ name: 'current', type: Number })
  @ApiQuery({ name: 'pageSize', type: Number })
  async findAll(@Pagination() pagination: PaginationParams) {
    const [data, total] = await this.foodTruckService.findAll({
      current: pagination.current,
      pageSize: pagination.pageSize,
    });
    return {
      data,
      total,
      success: true,
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foodTruckService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFoodTruckDto: UpdateFoodTruckDto,
  ) {
    return this.foodTruckService.update(+id, updateFoodTruckDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.foodTruckService.remove(+id);
  }
}
