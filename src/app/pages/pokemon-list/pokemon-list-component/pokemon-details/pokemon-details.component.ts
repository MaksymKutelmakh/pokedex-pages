import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonModel } from 'src/app/shared/models/pokemon.model';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

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
  }

}
