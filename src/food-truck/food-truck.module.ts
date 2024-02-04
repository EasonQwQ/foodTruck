import { Module } from '@nestjs/common';
import { FoodTruckService } from './food-truck.service';
import { FoodTruckController } from './food-truck.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodTruckEntity } from './entities/food-truck.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FoodTruckEntity])],
  controllers: [FoodTruckController],
  providers: [FoodTruckService],
})
export class FoodTruckModule {}
