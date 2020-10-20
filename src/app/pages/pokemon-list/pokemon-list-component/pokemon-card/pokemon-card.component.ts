import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonModel } from 'src/app/shared/models/pokemon.model';
import { PokemonTypes } from 'src/app/shared/types';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  pokemonTypes = PokemonTypes;
  _pokemon: PokemonModel;
  details: any;

  @Input() set pokemon(pokemon: PokemonModel) {
    if (pokemon) {
      this._pokemon = pokemon;
      this.pokemonService.getPokemonDetails(this._pokemon.details).subscribe(this.getPokemonDetails.bind(this));
    }
  }

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
  }

  getPokemonDetails(details: any) {
    this.details = details;
    this.details.types.map(t => t.type.color = this.pokemonTypes.find(pt => pt.name === t.type.name).color);
  }

}
