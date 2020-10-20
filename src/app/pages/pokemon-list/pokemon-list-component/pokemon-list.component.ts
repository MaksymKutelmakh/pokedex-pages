import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonListModel } from 'src/app/shared/models/pokemon-list.models';
import { PokemonModel } from 'src/app/shared/models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit, OnDestroy {

  pokemonList: PokemonModel[];
  singlePokemonDetails: PokemonModel;
  currentPage: string;

  focusedRow: any;
  nextPage: string;

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.currentPage = 'http://pokeapi.co/api/v2/pokemon/?limit=12';
    this.pokemonService.getPokemonList(this.currentPage).subscribe((listData: PokemonListModel) => {
      this.pokemonList = listData.pokemonList;
      this.nextPage = listData.nextPage;
    });
  }

  loadNewPage() {
    this.pokemonService.getPokemonList(this.nextPage).subscribe((listData: PokemonListModel) => {
      this.pokemonList = listData.pokemonList;
      this.currentPage = this.nextPage;
      this.nextPage = listData.nextPage;
    });
    this.singlePokemonDetails = null;
  }

  ngOnDestroy() {
  }

  selectSinglePokemon(pokemon: PokemonModel) {
    this.singlePokemonDetails = pokemon;
  }

}
