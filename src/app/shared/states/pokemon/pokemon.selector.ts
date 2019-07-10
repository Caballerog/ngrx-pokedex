import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PokemonState } from './pokemon.state';

export const selectPokemonState = createFeatureSelector<PokemonState>(
  'pokemon'
);

export const selectAll = createSelector(
  selectPokemonState,
  state => Object.values(state.entities)
);
