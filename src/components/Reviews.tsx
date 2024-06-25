'use client'
import React from 'react'
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import img4 from "../images/img4.jpg"
import img5 from "../images/img5.jpg"
import img6 from "../images/img6.jpg"
import img7 from "../images/img7.jpg"
import Slider from "react-slick"
import ReviewsCard from './ReviewsCard'

const ReviewsData = [
  {
    id:1,
    img: img2,
    name: "Jaxon Steele"
  },
  {
    id:2,
    img: img3,
    name: "Hannah Nelson"
  },
  {
    id:3,
    img: img4,
    name: "Zayden Wells"
  },
  {
    id:4,
    img: img5,
    name: "Andrea Piacquadio"
  },
  {
    id:5,
    img: img6,
    name: "Kason Ryder"
  },
  {
    id:6,
    img: img7,
    name: "Daniel Xavier"
  }
]

function Reviews() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      customPaging: function() {
        return (
          <div className='slick-dots-custom'></div>
        );
      },
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
      ],
    };

  return (
    <div className='bg-neutral-900 text-white py-14'>
      <h3 data-aos="fade-up" data-aos-delay="600" className='text-center text-lg font-bold text-orange-500 uppercase tracking-[4px]'>Our Testimonials</h3>
      <h1 data-aos="fade-up" data-aos-delay="1000" className='text-center text-4xl font-bold pt-3'>What Clients Say</h1>
      <div data-aos="zoom-in" className='px-0 lg:px-32 wt-10 pt-4'>
        <Slider {...settings}>
          {ReviewsData.map((e) => (
            <ReviewsCard key={e.id} id={e.id} name={e.name} img={e.img} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Reviews
