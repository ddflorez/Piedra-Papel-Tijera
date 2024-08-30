import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './components/Registro/registro.component';
import {JuegoComponent} from'./components/Juego/juego.component';
import {ResultadoComponent} from'./components/Resultado/resultado.component';
import { JuegoService } from './services/juego.services';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    JuegoComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [JuegoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
