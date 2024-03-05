'use client';

import Product from './Product';
// import swiper react components
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';


// import required modules
import { Pagination } from 'swiper/modules';

const PopularToysCarousel = ({toys}) => {
    console.log(toys);
  return (
    <Swiper 
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
            640: {slidesPerView: 1},
            768: {slidesPerView: 2},
            960: {slidesPerView: 3},
            1440: {slidesPerView: 4},
        }}
        pagination={{
            clickable: true,
        }}
        modules={[Pagination]}
        className="popular-bike-slider mb-8"
    >
        {toys.map((toy, index)=> {
            return (
                <SwiperSlide key={index}>
                    <Product product={toy}/>
                </SwiperSlide>
            )
        })}
    </Swiper>
  )
}

export default PopularToysCarousel