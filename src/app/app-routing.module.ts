import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list-component/pokemon-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/pokemon-list',
    pathMatch: 'full'
  },
  {
    path: 'pokemon-list',
    component: PokemonListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
