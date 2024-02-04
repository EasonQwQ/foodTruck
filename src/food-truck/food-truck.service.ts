import { Injectable } from '@nestjs/common';
import { CreateFoodTruckDto } from './dto/create-food-truck.dto';
import { UpdateFoodTruckDto } from './dto/update-food-truck.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FoodTruckEntity } from './entities/food-truck.entity';
import { Repository } from 'typeorm';
import { PaginationParams } from 'src/decorators/pagination.decorator';

@Injectable()
export class FoodTruckService {
  constructor(
    @InjectRepository(FoodTruckEntity)
    private foodTruckRepository: Repository<FoodTruckEntity>,
  ) {}

  create(createFoodTruckDto: CreateFoodTruckDto) {
    return 'This action adds a new foodTruck';
  }

  async findAll(
    paginationParams: PaginationParams,
  ): Promise<[CreateFoodTruckDto[], number]> {
    const res = await this.foodTruckRepository.findAndCount({
      take: paginationParams.pageSize,
      skip: (paginationParams.current - 1) * paginationParams.pageSize,
    });
    return res;
  }

  findOne(id: number) {
    return `This action returns a #${id} foodTruck`;
  }

  update(id: number, updateFoodTruckDto: UpdateFoodTruckDto) {
    return `This action updates a #${id} foodTruck`;
  }

  remove(id: number) {
    return `This action removes a #${id} foodTruck`;
  }
}
