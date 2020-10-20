import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './pokemon.service';

@NgModule({
    imports: [HttpClientModule],
    declarations: [],
    providers: [
        PokemonService
    ]
})
export class HttpModule {

}

