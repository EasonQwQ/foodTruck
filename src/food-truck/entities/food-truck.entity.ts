import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class FoodTruckEntity {
  // 主键ID / Primary Key ID
  @ApiProperty({ type: 'integer' })
  @PrimaryGeneratedColumn()
  id: number;

  // 位置ID / Location ID
  @Column({ type: 'varchar', length: 255 })
  locationId: string;

  // 申请人 / Applicant
  @Column({ type: 'varchar', length: 255 })
  applicant: string;

  // 设施类型 / Facility Type
  @Column({ type: 'varchar', length: 255 })
  facilityType: string;

  // CNN
  @Column({ type: 'varchar', length: 255 })
  cnn: string;

  // 位置描述 / Location Description
  @Column({ type: 'varchar', length: 255 })
  locationDescription: string;

  // 地址 / Address
  @Column({ type: 'varchar', length: 255 })
  address: string;

  // 区块批量 / Block Lot
  @Column({ type: 'varchar', length: 255 })
  blocklot: string;

  // 区块 / Block
  @Column({ type: 'varchar', length: 255 })
  block: string;

  // 批量 / Lot
  @Column({ type: 'varchar', length: 255 })
  lot: string;

  // 许可证 / Permit
  @Column({ type: 'varchar', length: 255 })
  permit: string;

  // 状态 / Status
  @Column({ type: 'varchar', length: 255 })
  status: string;

  // 食品项目 / Food Items
  @Column({ type: 'varchar', length: 255 })
  foodItems: string;

  // X坐标 / X Coordinate
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  x: number;

  // Y坐标 / Y Coordinate
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  y: number;

  // 纬度 / Latitude
  @Column({ type: 'decimal', precision: 10, scale: 6 })
  latitude: number;

  // 经度 / Longitude
  @Column({ type: 'decimal', precision: 10, scale: 6 })
  longitude: number;

  // 时间表 / Schedule
  @Column({ type: 'varchar', length: 255 })
  schedule: string;

  // 工作日和小时 / Days and Hours
  @Column({ type: 'varchar', length: 255 })
  dayshours: string;

  // 噪音 / Noise
  @Column({ type: 'varchar', length: 255 })
  noisent: string;

  // 批准日期 / Approved Date
  @Column({ type: 'timestamp' })
  approved: Date;

  // 收到日期 / Received Date
  @Column({ type: 'timestamp' })
  received: Date;

  // 之前的许可证 / Prior Permit
  @Column({ type: 'boolean' })
  priorPermit: boolean;

  // 到期日期 / Expiration Date
  @Column({ type: 'timestamp' })
  expirationDate: Date;

  // 位置 / Location
  @Column({ type: 'varchar', length: 255 })
  location: string;

  // 防火区 / Fire Prevention Districts
  @Column({ type: 'int' })
  firePreventionDistricts: number;

  // 警察区 / Police Districts
  @Column({ type: 'int' })
  policeDistricts: number;

  // 监督区 / Supervisor Districts
  @Column({ type: 'int' })
  supervisorDistricts: number;

  // 邮编 / Zip Codes
  @Column({ type: 'int' })
  zipCodes: number;

  // 社区 / Neighborhoods
  @Column({ type: 'int' })
  neighborhoods: number;
}
