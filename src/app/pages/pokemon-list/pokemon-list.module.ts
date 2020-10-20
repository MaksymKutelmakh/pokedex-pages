import { NgModule } from '@angular/core';
import { PokemonListComponent } from './pokemon-list-component/pokemon-list.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { PokemonCardComponent } from './pokemon-list-component/pokemon-card/pokemon-card.component';
import { PokemonDetailsComponent } from './pokemon-list-component/pokemon-details/pokemon-details.component';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonCardComponent,
    PokemonDetailsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  exports: [
    PokemonListComponent
  ]
})
export class PokemonListModule { }
