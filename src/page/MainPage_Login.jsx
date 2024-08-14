import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../module/Main/Hero.jsx";
import About from "../module/Main/About.jsx";
import Clients from "../module/Main/Clients.jsx";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 

import { testidata } from "../export.js";
const MainPage_Login = () => {
  // const [visibleSection, setVisibleSection] = useState(() => {
  //   return localStorage.getItem('visibleSection') || 'about';
  // });

  // const handleButtonClick = (section) => {
  //   setVisibleSection(section);
  //   localStorage.setItem('visibleSection', section);
  // };
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);

  const handleCardClick = () => {
    navigate('/haircut');
  };
  return (
    <>
    {/* <Hero /> */}
    <section
      id="about"
      className="w-[100%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20"
    >
      <div className="container">
        <div className="text-left mb-[160px]">
          <p data-aos="fade-up" className="text-sm text-primary">
            foy you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            ร้านตัดผม
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[100px] md:gap-5 place-items-center">
          {testidata.map((data) => (
            
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2x1 px-20 hover:bg-black hover:text-white relative shadow-xl duration-300 group max-w-[400px] mb-[170px]"
              onClick={() => handleCardClick(data.link)}
            >
              <div className="h-[100px] mb-[150px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[200px] block transform-translate group-hover:scale-150 duration-300 drop-shadow-md rounded-md"
                /> 
              </div>
              
              <div className="p-10 text-center">
                <div className="w-full flex items-center justify-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} className="text-primary" />
                  ))}
                </div>
                <h1 className="text-xl font-bold mb-2">{data.title}</h1>
                <p
                  className="mt-1 text-left text-primary font-bold group-hover:text-white duration-300 text-sm px-0 mb-2"
                >
                  {data.description}
                </p>
                
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
       {/* <About/> */}
      
      <Clients />
      
    </>
  )
}

export default MainPage_Login

