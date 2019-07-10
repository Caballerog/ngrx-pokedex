import { PokemonActionTypes, PokemonActions } from './pokemon.actions';
import { PokemonState, pokemonAdapter } from './pokemon.adapter';

export function pokemonInitialState(): PokemonState {
  return pokemonAdapter.getInitialState();
}

export function pokemonReducer(
  state: PokemonState = pokemonInitialState(),
  action: PokemonActions
): PokemonState {
  switch (action.type) {
    case PokemonActionTypes.LOAD_POKEMONS_SUCCESS:
      return pokemonAdapter.addAll(action.payload, state);

    case PokemonActionTypes.ADD_SUCCESS:
      return pokemonAdapter.addOne(action.pokemon, state);

    case PokemonActionTypes.DELETE_SUCCESS:
      return pokemonAdapter.removeOne(action.id, state);

    case PokemonActionTypes.UPDATE_SUCCESS:
      const { id } = action.pokemon;
      return pokemonAdapter.updateOne(
        {
          id,
          changes: action.pokemon
        },
        state
      );

    default:
      return state;
  }
}
