import { Component } from '@angular/core';
import { JuegoService } from '../services/juego.service';

// envía los movimientos seleccionados por el Jugador 1 al backend a través del servicio JuegoService.
//El backend procesa la lógica del juego y responde con el resultado de la ronda.
//El resultado de la ronda se muestra en la interfaz del usuario, incluyendo los movimientos elegidos por ambos jugadores y quién ganó la ronda.
//Errores en la comunicación con el backend se manejan y se muestran al usuario.





@Component({

  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent {
  movimientoJugador1: string = '';
  resultadoRonda: any = null; // Para almacenar el resultado recibido del backend
  error: string = '';

  constructor(private juegoService: JuegoService) {}

  // Función que envía los movimientos al backend y recibe el resultado
  enviarMovimiento(movimiento: string) {
    this.movimientoJugador1 = movimiento;

    this.juegoService.enviarMovimiento(this.movimientoJugador1).subscribe(
      (resultado) => {
        this.resultadoRonda = resultado;
        console.log('Resultado de la ronda:', this.resultadoRonda);
      },
      (error) => {
        this.error = 'Error al comunicarse con el servidor';
        console.error(error);
      }
    );
  }
}
