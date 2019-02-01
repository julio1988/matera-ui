import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { MateraHttp } from 'src/app/seguranca/matera-http';

@Injectable({
  providedIn: 'root'
})
export class EditCestaService {

  cestaUrl: string;

  constructor(private http: MateraHttp) {
    this.cestaUrl = `${environment.apiUrl}/cestas-beneficios`;
  }
}
