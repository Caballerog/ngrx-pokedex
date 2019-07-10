import * as PokemonActions from '@states/pokemon/pokemon.actions';
import * as PokemonSelectors from '@states/pokemon/pokemon.selector';

import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AppStore } from '@shared/interfaces/store.interface';
import { Observable } from 'rxjs';
import { Pokemon } from '@shared/interfaces/pokemon.interface';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonComponent {
  public pokemon: Pokemon = {} as Pokemon;
  public pokemons$: Observable<any> = this.store$.select(
    PokemonSelectors.selectAll
  );
  public onDelete(pokemon: Pokemon) {
    this.store$.dispatch(new PokemonActions.Delete(pokemon.id));
  }
  public onSelect(pokemon: Pokemon) {
    this.pokemon = pokemon;
  }

  public onUpdate(pokemon: Pokemon) {
    this.store$.dispatch(new PokemonActions.Update(pokemon));
  }
  public onAdd(pokemon: Pokemon) {
    this.store$.dispatch(new PokemonActions.Add(pokemon));
  }
  constructor(private store$: Store<AppStore>) {
    this.store$.dispatch(new PokemonActions.LoadPokemon());
  }
}
