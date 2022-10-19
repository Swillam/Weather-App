import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherApiUrl, {
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHostHeader, environment.XRapidAPIHostHeaderValue)
        .set(environment.XRapidAPIKeyHeader, environment.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
        .set('q', cityName)
        .set('unit', 'metric')
        .set('mode', 'json')
    });
  }
}
