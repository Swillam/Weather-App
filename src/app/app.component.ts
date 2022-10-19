import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  weatherData?: WeatherData;
  
  ngOnInit(): void {
    this.weatherService.getWeatherData("Paris")
    .subscribe({
      next: (weather) => {
        console.log(weather);
      }
    });
  }
  title = 'Weather-App';
}
