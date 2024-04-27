import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

import { PokemonController } from './pokemon.controller';
import { Pokemon, PokemonSchema } from './entities';
import { PokemonService } from './pokemon.service';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  imports: [MongooseModule.forFeature([{
    name: Pokemon.name,
    schema: PokemonSchema
  }])]
})

export class PokemonModule { }
