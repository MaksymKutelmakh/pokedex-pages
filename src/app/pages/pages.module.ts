import { NgModule } from '@angular/core';
import { PokemonListModule } from './pokemon-list/pokemon-list.module';


@NgModule({
  imports: [
    PokemonListModule
  ],
  declarations: [
  ],
  exports: [
    PokemonListModule
  ],
  providers: [
  ]
})
export class PagesModule { }
