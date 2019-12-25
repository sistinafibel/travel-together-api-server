import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  CreateDateColumn,
  ManyToMany,
  JoinTable
} from 'typeorm';
import { Account } from '../../account/entities/account.entity';
import { Country } from '../../country/entities/country.entity';

@Entity()
export class TravelRoom extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 64 })
  name: string;

  @Column('timestamp with time zone', { nullable: true })
  startDate: Date;

  @Column('timestamp with time zone', { nullable: true })
  endDate: Date;

  @Column({ nullable: true })
  coverImagePath: string;

  @ManyToMany(
    _type => Account,
    account => account.joinedTravelRooms
  )
  @JoinTable({ name: 'travel_room_to_account' })
  members: Account[];

  @ManyToMany(
    _type => Country,
    country => country.travelRooms
  )
  @JoinTable({ name: 'travel_room_to_country' })
  countries: Country[];

  @CreateDateColumn()
  @Index()
  createdDate: Date;
}
