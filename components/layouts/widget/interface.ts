export interface putWeather {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number,
  },
  visibility: number,
  wind: {
    speed: number,
    deg: number,
    gust: number,
    },
    clouds: {
        all: number,
        },
        dt: number,
        sys: {
        type: number,
        id: number,
        country: string,
        sunrise: number,
        sunset: number
        },
        timezone: number,
        id: number,
        name: string,
        cod: number
        
}
export interface dtWeather {
  id: number | null;
  time: string;
  temp: number | null;
  minTemp: number | null;
  maxTemp: number | null;
  windSpeed: number | null;
  humidity: number | null;
  precipitation: string | null;
  cloudy: number | null;
  image: string | null;
  isActive: boolean;
  dayTime: string|TimeRanges;
}
export interface town{
    town: string,
    townRus: string,
}
