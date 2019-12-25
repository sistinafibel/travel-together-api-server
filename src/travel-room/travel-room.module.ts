import { Module } from '@nestjs/common';
import { TravelRoomController } from './travel-room.controller';
import { TravelRoomService } from './travel-room.service';
import { AWSModule } from '../aws/aws.module';

@Module({
  imports: [AWSModule],
  controllers: [TravelRoomController],
  providers: [TravelRoomService]
})
export class TravelRoomModule {}
