import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  {
    path: 'login', //TODO: Hace referencia a localhost:4200/auth/login
    component: LoginPageComponent,
  },
  {
    path: '**', //TODO: Hace referencia a localhost:4200/auth/login
    redirectTo: '/auth/login',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
