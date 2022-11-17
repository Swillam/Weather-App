import { Component, OnChanges, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Weather-App';
  cityName: string = 'Paris';
  weatherData?: WeatherData;
  localHour = new Date().getHours();
  localTime: string = '';
  isDay: boolean = true;
  weatherByHours: any[] = []

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  isDayInLocalCity() {
    const cityTime = this.weatherData?.current.last_updated || '';
    this.localHour = new Date(cityTime).getHours();
    this.localTime = new Date(cityTime).toLocaleString('fr-FR');
    return this.localHour >= 6 && this.localHour < 20;
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  getWeatherByHours(data: any) {
    this.weatherByHours = data.forecast.forecastday[0].hour
      .splice(this.localHour + 1, 10)
      .map((hourData: any) => {
        return { temp: hourData.temp_c,  icon: hourData.condition.icon }
      })
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (weather) => {
        this.weatherData = weather;
        this.isDay = this.isDayInLocalCity();
        this.getWeatherByHours(weather);
      },
    });
  }
}
