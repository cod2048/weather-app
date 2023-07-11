import { useEffect, useState } from 'react';
import './App.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClipLoader from "react-spinners/ClipLoader";


// 1. 앱이 실행되면 현재위치 기반의 날씨가 보임
// 2. 날씨정보에는 도시, 섭씨 화씨의 온도가 나타남
// 3. 5개의 버튼이 있음(현재위치와 타도시)
// 4. 도시버튼 클릭 시마다 도시별 날씨가 보임
// 5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나옴
// 6. 로딩스피너도 맹글기

function App() {
  const [weather,setWeather] = useState(null);
  const [city,setCity] = useState('');
  const cities = ['paris', 'new york', 'tokyo', 'seoul']
  const weatherApi = process.env.REACT_APP_WEATHERAPI;
  const [loading,setLoading]=useState(false);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    }); // 사용자 위치 확인
  }

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApi}&units=metric`
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  }

  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApi}&units=metric`
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  }

  const handleCityChange = (city) => {
    if (city === "current") {
      setCity(null);
    } else {
      setCity(city);
    }
  };

  useEffect(() => {
    if(city==""){
      getCurrentLocation();
    }else{
      getWeatherByCity();
    }
  }, [city]);

  return (
    <div>
      {loading ? (
      <div className='container'>
      <ClipLoader
        color='#f88c6b'
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
      ) : (
      <div className='container'>
      <WeatherBox weather={weather}/>
      <WeatherButton cities={cities} setCity={setCity}/>
    </div>
    )}
      
    </div>
  );

  
}

export default App;
