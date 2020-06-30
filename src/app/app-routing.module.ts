import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterComponent } from './components/character/character.component';
import { ManualComponent } from './components/manual/manual.component';


const routes: Routes = [
  { path: 'characters', component: CharactersComponent },
  { path: 'character/:id', component: CharacterComponent },
  { path: 'characters/:query', component: CharactersComponent },
  { path: 'manual', component: ManualComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'characters'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
