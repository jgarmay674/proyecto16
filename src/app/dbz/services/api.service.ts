import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personaje } from '../interfaces/character.interface';
import { HttpClient } from '@angular/common/http';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private backendSvc:BackendService,
    private http: HttpClient) { }

  obtenerPersonajes(): Observable<Personaje[]> {
    return this.http.get<Personaje[]>(this.backendSvc.getListUrl());
  }

  anadirPersonaje(personaje: Personaje): Observable<Personaje> {
    console.log('Enviando personaje:', personaje);
    return this.http.post<Personaje>(this.backendSvc.getNewDataUrl(), personaje);
  }

  borrarPersonaje(id: number): Observable<any> {
    console.log('Eliminando personaje con id:', id);
    return this.http.delete(this.backendSvc.getDeleteDataUrl(id));
  }
}