import React from "react";
import "./testimonials.css";
import AVATAR1 from "../../asserts/avatar1.jpg";
import AVATAR2 from "../../asserts/avatar2.jpg";
import AVATAR3 from "../../asserts/avatar3.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    image: AVATAR1,
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repellendus quaerat quod placeat modi dolorem voluptate! Iste, laudantium neque facilis vitae unde cumque sint deserunt. Natus facere iusto et accusamus!",
  },
  {
    image: AVATAR2,
    name: "Name",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repellendus quaerat quod placeat modi dolorem voluptate! Iste, laudantium neque facilis vitae unde cumque sint deserunt. Natus facere iusto et accusamus!",
  },
  {
    image: AVATAR3,
    name: "Name",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repellendus quaerat quod placeat modi dolorem voluptate! Iste, laudantium neque facilis vitae unde cumque sint deserunt. Natus facere iusto et accusamus!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ image, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={image} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
