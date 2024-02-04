import { PartialType } from '@nestjs/swagger';
import { CreateFoodTruckDto } from './create-food-truck.dto';

export class UpdateFoodTruckDto extends PartialType(CreateFoodTruckDto) {}
