import { useEffect } from 'react';
import './App.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import 'bootstrap/dist/css/bootstrap.min.css';


// 1. 앱이 실행되면 현재위치 기반의 날씨가 보임
// 2. 날씨정보에는 도시, 섭씨 화씨의 온도가 나타남
// 3. 5개의 버튼이 있음(현재위치와 타도시)
// 4. 도시버튼 클릭 시마다 도시별 날씨가 보임
// 5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나옴
// 6. 로딩스피너도 맹글기

function App() {

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    }); // 사용자 위치 확인
  }

  const getWeatherByCurrentLocation = async (lat, lon) => {
    const weatherApi = process.env.REACT_APP_WEATHERAPI;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApi}`
    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data);
  }

  useEffect(() => {
    getCurrentLocation()
  }, []);
  return (
    <div>
      <div className='container'>
        <WeatherBox />
        <WeatherButton />
      </div>
    </div>
  );
}

export default App;
