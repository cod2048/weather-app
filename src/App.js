import { useEffect } from 'react';
import './App.css';


// 1. 앱이 실행되면 현재위치 기반의 날씨가 보임
// 2. 날씨정보에는 도시, 섭씨 화씨의 온도가 나타남
// 3. 5개의 버튼이 있음(현재위치와 타도시)
// 4. 도시버튼 클릭 시마다 도시별 날씨가 보임
// 5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나옴
// 6. 로딩스피너도 맹글기

function App() {
  
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log("현재위치", lat, lon);
    }); // 사용자 위치 확인
  }
  useEffect(()=>{
    getCurrentLocation()
  },[]);
  return (
    <div>
      
    </div>
  );
}

export default App;
