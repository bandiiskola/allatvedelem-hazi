import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllatokListajaComponent } from './allatok-listaja/allatok-listaja.component';
import { AllatReszleteiComponent } from './allat-reszletei/allat-reszletei.component';

@NgModule({
  declarations: [
    AppComponent,
    AllatokListajaComponent,
    AllatReszleteiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
