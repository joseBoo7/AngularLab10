import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrabajadorComponent } from './trabajador/trabajador.component';
import { ArticulosComponent } from './articulos/articulos.component';

@NgModule({
  declarations: [
    AppComponent,
    TrabajadorComponent,
    ArticulosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
