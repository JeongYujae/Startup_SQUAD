import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import '../App.css';
// import "swiper/swiper.scss";
// import "swiper/components/navigation/navigation.scss";
// import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination])

function Banner() {
  return(
    <div>
      <Swiper
        className="banner"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <div class="swiper-wrapper">
        <SwiperSlide className="swiper-slide" id="slide1">Slide 1</SwiperSlide>
        <SwiperSlide className="swiper-slide" id="slide2">Slide 2</SwiperSlide>
        <SwiperSlide className="swiper-slide" id="slide3">Slide 3</SwiperSlide>
        <SwiperSlide className="swiper-slide" id="slide4">Slide 4</SwiperSlide>
        </div>
      </Swiper>
    </div>
  )
}

export default Banner;

// import React, { useEffect } from "react";
// import '../App.css';
// import { useScript } from "../utils/hooks";




// const Banner = () => {
//     const status =useScript("https://unpkg.com/swiper/swiper-bundle.min.js");

    
      

//     return(

//     <div className="swiper mySwiper">
//       <div className="swiper-wrapper">

//         {/* <div className="swiper-slide"><img src="https://placeimg.com/640/480/any"></div>
//         <div className="swiper-slide"><img src="https://placeimg.com/640/480/any"></div>
//         <div className="swiper-slide"><img src="https://placeimg.com/640/480/any"></div> */}

//         <div className="swiper-slide" id="slide1">슬라이드1</div>
//         <div className="swiper-slide" id="slide2">슬라이드2</div>
//         <div className="swiper-slide" id="slide3">슬라이드3</div>
//       </div>

//         <div className="swiper-button-next"></div>
//         <div className="swiper-button-prev"></div>
//         <div className="swiper-pagination"></div>
//         </div>
//     )
    
// }
// export default Banner




// //   {/* var swiper = new Swiper(".mySwiper", {
// //     spaceBetween: 0,
// //     centeredSlides: true,
// //     autoplay: {
// //       delay: 2500,
// //       disableOnInteraction: false,
// //     },
// //     pagination: {
// //       el: ".swiper-pagination",
// //       clickable: true,
// //     },
// //     navigation: {
// //       nextEl: ".swiper-button-next",
// //       prevEl: ".swiper-button-prev",
// //     },
// //     watchOverflow : true
// //   }); */}


