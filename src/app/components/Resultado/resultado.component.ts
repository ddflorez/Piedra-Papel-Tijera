import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({ //Este componente muestra el resultado de la ronda y permite reiniciar el juego o volver al registro.
  selector: 'resultado-batalla',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {
  resultadoRonda: string = '';

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras.state) {
      this.resultadoRonda = nav.extras.state['resultadoRonda'];
    }
  }

  reiniciarJuego() {
    this.router.navigate(['/registro']);
  }
}
