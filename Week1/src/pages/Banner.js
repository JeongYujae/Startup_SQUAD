import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination])

function MainPage() {
  return(
    <div>
      <Swiper
        className="banner"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide className='slide1'>Slide 1</SwiperSlide>
        <SwiperSlide className='slide2'>Slide 2</SwiperSlide>
        <SwiperSlide className='slide3'>Slide 3</SwiperSlide>
        <SwiperSlide className='slide4'>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default MainPage;