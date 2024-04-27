import { InjectModel } from '@nestjs/mongoose';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

import { AxiosAdapter } from 'src/common/adapters/axios.adapter';
import { PokemonResponseInterface } from './interfaces';
import { CreatePokemonDto } from 'src/pokemon/dto';
import { Pokemon } from 'src/pokemon/entities';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly axiosAdapter: AxiosAdapter
  ) { }

  async executeSeed() {
    await this.pokemonModel.deleteMany({})

    const res = await this.axiosAdapter.get<PokemonResponseInterface>('https://pokeapi.co/api/v2/pokemon?limit=650')

    const pokemons: CreatePokemonDto[] = []

    res.results.forEach(({ name, url }) => {
      const segments = url.split('/')
      const no = +segments[segments.length - 2]

      pokemons.push({ no, name })
    })

    await this.pokemonModel.insertMany(pokemons)

    return res
  }
}
