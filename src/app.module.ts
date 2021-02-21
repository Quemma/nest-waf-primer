import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BioDataModule } from './citizen-registration/bio-data/bio-data.module';
import { CitizenRegistrationModule } from './citizen-registration/citizen-registration.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), CitizenRegistrationModule, BioDataModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [BioDataModule],
})
export class AppModule {}
