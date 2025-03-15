"use client";
import React from "react";
import Heading from "../Heading";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image'

import "@/components/ExclusiveGame/index.css";
import img1 from "../../../public/assets/Component1.jpg"
import img2 from "../../../public/assets/Component2.jpg"
import img3 from "../../../public/assets/Component3.jpg"
import hotImg from "../../../public/assets/hot.png"
import newImg from "../../../public/assets/new.png"

const ExclusiveGame = () => {
  const listImg = [
    {
      name: "Evolution",
      logo: img1,
      status: "Hot",
    },
    {
      name: "Evolution",
      logo: img2
    },
    {
      name: "Evolution",
      logo: img3,
      status: "New",
    },
    {
      name: "Evolution",
      logo: img1,
      status: "New",
    },
    {
      name: "Evolution",
      logo: img2
    },
    {
      name: "Evolution",
      logo: img3
    },
    {
      name: "Evolution",
      logo: img1
    },
    {
      name: "Evolution",
      logo: img2,
      status: "Hot",
    },
    {
      name: "Evolution",
      logo: img3
    },
  ];
  return (
    <>
      <Heading title="Exclusive Game" />
      <div className="py-4">
        <Swiper
          slidesPerView={8}
          spaceBetween={16}
          pagination={{
            clickable: true,
          }}
          className="exclusive-game"
        >
          {listImg.map((tag, index) => (
            <SwiperSlide key={index} className="bg-transparent rounded-lg">
              <div className=" rounded-lg overflow-hidden relative">
                <Image src={tag.logo} alt={tag.name} className='w-4 h-4 object-cover' width={0} height={0} />
                {tag.status && (
                  <Image src={tag.status == "Hot" ? hotImg : newImg} alt="Hot" width={40} height={40} className="absolute top-2.5 left-0" />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ExclusiveGame;
