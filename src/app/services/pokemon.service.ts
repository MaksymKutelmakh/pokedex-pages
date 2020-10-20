import {EventEmitter, Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonModel } from '../shared/models/pokemon.model';
import { PokemonListModel } from '../shared/models/pokemon-list.models';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient
  ) { }

  getPokemonList(url: string): Observable<PokemonListModel> {
    return this.http.get(url)
     .pipe(
        map((response: any) => {
          if (response) {
            return new PokemonListModel().deserialize(response);
          }
        })
      );
  }

  getPokemonDetails(url: string): Observable<any> {
    return this.http.get(url)
    .pipe(
      map((response: any) => {
        if (response) {
          return response;
        }
      })
    );
  }

}
