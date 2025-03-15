"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import '../Carousel/index.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from "next/image";
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"


const Carousel = () => {
    return (
        <>
            <Swiper
                slidesPerView={'auto'}
                centeredSlides={true}
                spaceBetween={15}
                modules={[Pagination]}
                className="carousel"
            >
                <SwiperSlide className="bg-gradient-to-r from-[#147261] to-[#082C25] rounded-[40px] px-8 py-6 shadow-lg w-[600px] max-w-full mx-auto flex-row">
                    <article>
                        <div className="bg-white/10 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block">
                            Exclusive Tournament
                        </div>

                        <h2 className="text-xl font-bold mt-3">
                            Piggy Christmas Tap:
                            <br/>
                            €35,000 For Your
                            <br />
                            Wins
                        </h2>

                        <button className="bg-[#FF0960] hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-lg shadow-md mt-5">
                            JOIN AND WIN
                        </button>
                    </article>
                    <figure>
                        <Image src={image1} alt="Logo" className="pl-[6px]" />
                    </figure>
                </SwiperSlide>
                <SwiperSlide className="bg-gradient-to-r from-[#147261] to-[#082C25] rounded-[40px] px-8 py-6 shadow-lg w-[600px] max-w-full mx-auto flex-row">
                    <article>
                        <div className="bg-white/10 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block">
                            Exclusive Tournament
                        </div>

                        <h2 className="text-xl font-bold mt-3">
                            Piggy Christmas Tap:
                            <br />
                            €35,000 For Your
                            <br />
                            Wins
                        </h2>

                        <button className="bg-[#FF0960] hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-lg shadow-md mt-5">
                            JOIN AND WIN
                        </button>
                    </article>
                    <figure>
                        <Image src={image1} alt="Logo" className="pl-[6px]" />
                    </figure>
                </SwiperSlide>
                <SwiperSlide className="bg-gradient-to-r from-[#147261] to-[#082C25] rounded-[40px] px-8 py-6 shadow-lg w-[600px] max-w-full mx-auto flex-row">
                    <article className="banner-content">
                        <div className="bg-white/10 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block">
                            Exclusive Tournament
                        </div>

                        <h2 className="text-xl font-bold mt-3">
                            Piggy Christmas Tap:
                            <br />
                            €35,000 For Your
                            <br />
                            Wins
                        </h2>

                        <button className="bg-[#FF0960] hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-lg shadow-md mt-5">
                            JOIN AND WIN
                        </button>
                    </article>
                    <figure>
                        <Image src={image2} alt="Logo" className="pl-[6px]" />
                    </figure>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Carousel