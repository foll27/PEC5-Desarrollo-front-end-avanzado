import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailDetailComponent } from './components/cocktail-detail/cocktail-detail.component';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';

const routes: Routes = [
  { path: '', component: CocktailListComponent},
  { path: 'cocktail/:idDrink', component: CocktailDetailComponent},
  { path: '**', component:CocktailListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
