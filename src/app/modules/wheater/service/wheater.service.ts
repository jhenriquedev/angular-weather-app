import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WheaterService {
  private apiKey = '48a3580f2facdf2cf1e82d321e2c2bd2';
  private basePath = 'https://api.openweathermap.org/data/2.5/weather?';

  constructor(
    private http: HttpClient,
  ) { }


  getWheaterData(cityName: string): Observable<any>{
    return this.http.get(
      `${this.basePath}q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`,
      {},
    );
  }
}
