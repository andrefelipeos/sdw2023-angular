import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private URL = environment.API_URL + "/user/1"

  constructor(private httpClient: HttpClient) { }

  getCard(): Observable<any> {
    return this.httpClient.get<any>(this.URL)
  }

}
