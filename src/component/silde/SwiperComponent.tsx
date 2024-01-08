import React from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

SwiperCore.use([Navigation, Pagination]);

const SwiperComponent = () => {
  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      spaceBetween={50}
      slidesPerView={3}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      {/* Thêm các slide ảnh và nội dung khác vào đây */}
    </Swiper>
  );
};

export default SwiperComponent;
