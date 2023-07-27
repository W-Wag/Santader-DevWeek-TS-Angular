import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../environments/environments';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private apiUrl = enviroment.API_URL;
  constructor(private http: HttpClient) {  }
  getCard(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
