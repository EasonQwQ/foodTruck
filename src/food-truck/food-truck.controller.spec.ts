import { PaginationParams } from 'src/decorators/pagination.decorator';
import { FoodTruckService } from '../food-truck/food-truck.service'; // Import the necessary service module
import { Test, TestingModule } from '@nestjs/testing';
import { FoodTruckController } from './food-truck.controller';

describe('FoodTruckController', () => {
  // ...existing setup code...

  describe('findAll', () => {
    describe('FoodTruckController', () => {
      let controller: FoodTruckController;
      let service: FoodTruckService; // Declare the service variable

      beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
          controllers: [FoodTruckController],
          providers: [
            FoodTruckService,
            {
              provide: 'FoodTruckEntityRepository',
              useValue: {
                // Mock methods as needed
                findAndCount: jest.fn(),
              },
            },
          ],
        }).compile();

        controller = module.get<FoodTruckController>(FoodTruckController);
        service = module.get<FoodTruckService>(FoodTruckService); // Assign the service instance
      });

      it('should return a list of food trucks with pagination', async () => {
        const pagination: PaginationParams = { current: 1, pageSize: 10 };
        const result = { data: [], total: 0, success: true };

        jest
          .spyOn(service, 'findAll')
          .mockResolvedValueOnce([result.data, result.total]);

        expect(await controller.findAll(pagination)).toEqual(result);
        expect(service.findAll).toHaveBeenCalledWith({
          current: pagination.current,
          pageSize: pagination.pageSize,
        });
      });
    });
  });

  // ...existing tests...
});
