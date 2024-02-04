import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsBoolean,
  IsDate,
} from 'class-validator';

export class CreateFoodTruckDto {
  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  locationId: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  applicant: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  facilityType: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  cnn: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  locationDescription: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  address: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  blocklot: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  block: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  lot: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  permit: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  status: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  foodItems: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  x: number;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  y: number;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  latitude: number;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  longitude: number;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  schedule: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  dayshours: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  noisent: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  approved: Date;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  received: Date;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  priorPermit: boolean;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  expirationDate: Date;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  location: string;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  firePreventionDistricts: number;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  policeDistricts: number;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  supervisorDistricts: number;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  zipCodes: number;

  @Expose()
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  neighborhoods: number;
}
