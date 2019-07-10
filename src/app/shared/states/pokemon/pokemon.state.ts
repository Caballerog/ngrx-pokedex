import { Pokemon } from '@shared/interfaces/pokemon.interface';
export interface PokemonState {
  ids: number[];
  entities: { [key: string]: Pokemon };
}
