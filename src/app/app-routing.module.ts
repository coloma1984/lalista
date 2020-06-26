import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksComponent } from './components/tasks/tasks.component';
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { ListaCompraComponent } from './components/lista-compra/lista-compra.component';

import { AuthGuard } from './auth.guard'


const routes: Routes = [  {
  path: '',
  redirectTo: '/lista',
  pathMatch: 'full'
},
{
  path: 'tasks',
  component: TasksComponent
},
{
  path: 'private',
  component: PrivateTasksComponent,
  canActivate: [AuthGuard]
},
{
  path: 'signup',
  component: SignupComponent
},
{
  path: 'signin',
  component: SigninComponent
},
{
  path: 'lista',
  component: ListaCompraComponent,
  canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
