/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudianteModule } from './modulos/estudiante/estudiante.module';
import { ProfesorModule } from './modulos/profesor/profesor.module';
import { AsignaturaModule } from './modulos/asignatura/asignatura.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'project',
      autoLoadEntities: true,
      synchronize: true,
    }),
    EstudianteModule,
    ProfesorModule,
    AsignaturaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
