import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import { useEffect } from 'react';
import useScript from '../utils/hooks';

SwiperCore.use([Navigation, Pagination])

// import { useEffect } from "react";
// import "../swiper-bundle.min.css"
// import { useScript } from "../utils/hooks";


function Banner() {
  const script = document.createElement("script");
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/Sly/1.6.1/sly.min.js";
  script.async = true;
  document.body.appendChild(script);
  
    // const status = useScript("https://cdnjs.cloudflare.com/ajax/libs/Sly/1.6.1/sly.min.js");
    
    // useEffect(() => {
    //   if(status === "ready") {
        
    //   }
    // }, []);
  
  
  return(
    <div class="topmenu">
 <div class="frame">
    <ul class="slide">
        <li>메뉴1</li>
        <li>메뉴2</li>
        <li>메뉴3</li>
        <li>메뉴4</li>
        <li>메뉴5</li>
        <li class="activetop"><a href="https://codepen.io/lee85114/pen/gOaqWZv">메뉴6</a></li>
        <li>메뉴7</li>
        <li>메뉴8</li>
        <li>메뉴9</li>
        <li>메뉴10</li>
        <li>메뉴11</li>
        <li>메뉴12</li>
        <li>메뉴13</li>
        <li>메뉴14</li>
        <li>메뉴15</li>
        <li>메뉴16</li>
        <li>메뉴17</li>
        <li>메뉴18</li>
        <li>메뉴19</li>
        <li>메뉴20</li>
        <li>메뉴21</li>
        <li>메뉴22</li>

    </ul>
 </div>
</div>


    // <div>
    //   <Swiper
    //     className="banner"
    //     spaceBetween={0}
    //     slidesPerView={1}
    //     navigation
    //     pagination={{ clickable: true }}
    //   >
    //     <SwiperSlide className='slide1'>메뉴메뉴메뉴</SwiperSlide>
    //     <SwiperSlide className='slide2'>Slide 2</SwiperSlide>
    //     <SwiperSlide className='slide3'>Slide 3</SwiperSlide>
    //     <SwiperSlide className='slide4'>Slide 4</SwiperSlide>
    //   </Swiper>
    // </div>
  )
}

export default Banner;