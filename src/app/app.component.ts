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

  cityName: string = 'Paris';
  weatherData?: WeatherData;
  
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }
  title = 'Weather-App';

  dateTime(){
    return new Date().getHours()
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData("Paris")
    .subscribe({
      next: (weather) => {
        this.weatherData = weather
        console.log(weather);
      }
    });
  }
}
