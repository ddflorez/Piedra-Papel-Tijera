import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  private apiUrl = 'https://tu-backend.com/api/juego'; // URL del backend

  constructor(private http: HttpClient) {}

  enviarMovimiento(movimientoJugador1: string): Observable<any> {
    // Aquí se realiza la petición POST al backend con el movimiento del jugador
    return this.http.post<any>(`${this.apiUrl}/ronda`, { movimientoJugador1 });
  }
}
