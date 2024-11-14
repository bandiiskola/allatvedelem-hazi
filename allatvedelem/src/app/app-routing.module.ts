import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllatokListajaComponent } from './allatok-listaja/allatok-listaja.component';
import { AllatReszleteiComponent } from './allat-reszletei/allat-reszletei.component';

const routes: Routes = [
  { path: 'allatok', component: AllatokListajaComponent },
  { path: 'allatok/:id', component: AllatReszleteiComponent },
  { path: '', redirectTo: '/allatok', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
