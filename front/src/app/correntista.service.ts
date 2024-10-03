import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Correntista } from './model/correntista';

@Injectable({
  providedIn: 'root'
})
export class CorrentistaService {

  constructor(
    private http: HttpClient
  ) { }

  public cadastrar(correntista: Correntista): Observable<any> {
    return this.http.post("http://localhost:3000/correntistas", correntista);
  }

}