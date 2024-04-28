import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { PokemonModule } from 'src/pokemon/pokemon.module';
import { SeedController } from './seed.controller';
import { SeedService } from './seed.service';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [PokemonModule, CommonModule],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
