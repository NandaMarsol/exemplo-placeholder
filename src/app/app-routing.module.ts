import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorpoComponent } from './corpo/corpo.component';
import { HomeComponent } from './home/home.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { DadosComponent } from './dados/dados.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  { path: '', component: CorpoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'tarefas', component: TarefasComponent },
  { path: 'dados', component: UserListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
