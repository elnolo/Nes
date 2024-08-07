import { IsString } from 'class-validator';
import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Estudiante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  edad: string;

  @Column()
  sexo: string;

  @Column()
  anno: string;

  @DeleteDateColumn()
  deletedAt: Date;
}
