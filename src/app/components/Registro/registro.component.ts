import { Component } from '@angular/core';

@Component({ //Se encarga de recibir y enviar nombres de usuario a los jugadores para el registro
  selector: 'app-registro-jugador',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  jugador1: string = '';
  jugador2: string = '';

  // Función para simular el envío de datos al backend
  registrarJugadores() {
    const datosJugadores = {
      id1: Math.floor(Math.random() * 1000),
      nombre1: this.jugador1,
      id2: Math.floor(Math.random() * 1000),
      nombre2: this.jugador2
    };

    console.log('Datos de los jugadores registrados:', datosJugadores);

    // Aquí se redirige al componente del juego (en la app real, se usaría un servicio de router)
    // this.router.navigate(['/juego'], { state: { jugadores: datosJugadores } });
  }
}
