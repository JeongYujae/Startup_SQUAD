import React, { useEffect } from 'react';
import './App.css';
import Banner from './components/Banner';

function App() {


  return (
    <div>
    홈
    <Banner/>
  
    </div>
  );
}

export default App;


// useEffect(() => {
//   const script = document.createElement('script');
//   script.src = "https://unpkg.com/swiper/swiper-bundle.min.js";

//   const css = document.createElement('link');
//   css.rel = 'stylesheet';
//   css.href = "https://unpkg.com/swiper/swiper-bundle.min.css";

//   document.head.appendChild(script);
//   document.head.appendChild(css);

//   return () => {
//     document.head.removeChild(script);
//     document.head.removeChild(css);
//   }

// }
// , []);
  //  {/* <div class="swiper mySwiper">
  //     <div class="swiper-wrapper"> */}
  //       {/* <div class="swiper-slide"><img src="https://placeimg.com/640/480/any"></div>
  //       <div class="swiper-slide"><img src="https://placeimg.com/640/480/any"></div>
  //       <div class="swiper-slide"><img src="https://placeimg.com/640/480/any"></div> */}
  //       {/* <div class="swiper-slide" id="slide1"></div>
  //       <div class="swiper-slide" id="slide2"></div>
  //       <div class="swiper-slide" id="slide3"></div>

  //     </div>
  //     <div class="swiper-button-next"></div>
  //     <div class="swiper-button-prev"></div>
  //     <div class="swiper-pagination"></div>
  //   </div> */}