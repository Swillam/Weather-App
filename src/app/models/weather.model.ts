export interface WeatherData {
    location: Location
    forecast: Forecast
    current: Current
  }
  
  export interface Location {
    name: string
    region: string
    country: string
    lat: number
    lon: number
    tz_id: string
    localtime_epoch: number
    localtime: string
  }
  
  export interface Current {
    last_updated_epoch: number
    last_updated: string
    temp_c: number
    temp_f: number
    is_day: number
    condition: Condition
    wind_mph: number
    wind_kph: number
    wind_degree: number
    wind_dir: string
    pressure_mb: number
    pressure_in: number
    precip_mm: number
    precip_in: number
    humidity: number
    cloud: number
    feelslike_c: number
    feelslike_f: number
    vis_km: number
    vis_miles: number
    uv: number
    gust_mph: number
    gust_kph: number
  }
  
  export interface Condition {
    text: string
    icon: string
    code: number
  }
  
  export interface Forecast {
    forecastday: {
      0: {
        date: string
        date_epoch: number
        day: Day
        hour: Hour
      }
    }
  }
  export interface Day {
    avghumidity: number
    avgtemp_c: number
    avgtemp_f: number
    avgvis_km: number
    avgvis_miles: number
    daily_chance_of_rain: number
    daily_chance_of_snow: number
    daily_will_it_rain: number
    daily_will_it_snow: number
    maxtemp_c: number
    maxtemp_f: number
    maxwind_kph: number
    maxwind_mph: number
    mintemp_c: number
    mintemp_f: number
    totalprecip_in: number
    totalprecip_mm: number
    totalsnow_cm: number
    uv: number
  }
  export interface Hour {
    0: {
      is_day: number
      temp_c: number
      time: string
    }
    1: {
      is_day: number
      temp_c: number
      time: string
    }
    2: {
      is_day: number
      temp_c: number
      time: string
    }
    3: {
      is_day: number
      temp_c: number
      time: string
    }
    4: {
      is_day: number
      temp_c: number
      time: string
    }
    5: {
      is_day: number
      temp_c: number
      time: string
    }
    6: {
      is_day: number
      temp_c: number
      time: string
    }
    7: {
      is_day: number
      temp_c: number
      time: string
    }
    8: {
      is_day: number
      temp_c: number
      time: string
    }
    9: {
      is_day: number
      temp_c: number
      time: string
    }
    10: {
      is_day: number
      temp_c: number
      time: string
    }
    11: {
      is_day: number
      temp_c: number
      time: string
    }
    12: {
      is_day: number
      temp_c: number
      time: string
    }
    13: {
      is_day: number
      temp_c: number
      time: string
    }
    14: {
      is_day: number
      temp_c: number
      time: string
    }
    15: {
      is_day: number
      temp_c: number
      time: string
    }
    16: {
      is_day: number
      temp_c: number
      time: string
    }
    17: {
      is_day: number
      temp_c: number
      time: string
    }
    18: {
      is_day: number
      temp_c: number
      time: string
    }
    19: {
      is_day: number
      temp_c: number
      time: string
    }
    20: {
      is_day: number
      temp_c: number
      time: string
    }
    21: {
      is_day: number
      temp_c: number
      time: string
    }
    22: {
      is_day: number
      temp_c: number
      time: string
    }
    23: {
      is_day: number
      temp_c: number
      time: string
    }
  }