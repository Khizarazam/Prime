import React, { useEffect, useRef } from "react";
import image_1 from "../assets/FirstImage.png";
import video from "../assets/video.mov";
import Labimage from "../assets/Labimg.jpg";
import Electroplatingimg from "../assets/electroplatingimg.jpg";
import img1 from "../assets/basf.jpg";
import img2 from "../assets/hc-iso.jpeg";
import img3 from "../assets/jas-naz.jpg";
import Equipimage from "../assets/2ndimg.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { IoArrowForward } from "react-icons/io5";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const Cards = [
    {
      id: 1,
      name: "ElectroPlating Chemicals:",
      ankerLink: "/Electroplating",
      image: Electroplatingimg,
      desc: "If anything made of matter is made up of chemicals, which means that only phenomena that aren't made of matter are not chemicals: Energy is not a chemical.",
    },
    {
      id: 2,
      name: "ElectroPlating Equipments:",
      ankerLink: "/Equipments",
      image: Equipimage,
      desc: "We have in-house electroplating plants, providing all types of metal finishing services.",
    },
    {
      id: 3,
      name: "Lab Analysis:",
      ankerLink: "/Lab",
      image: Labimage,
      desc: "We provide, complete lab facilities, analysis and testing of your electroplating systems and metal finishing procedures.",
    },
  ];

  useEffect(() => {
    let startY = 0;

    const handleScroll = (e) => {
      const deltaY = e.deltaY || 0;
      if (deltaY > 0) {
        gsap.to("span", {
          x: "-250%",
          repeat: -1,
          duration: 13,
          ease: "none",
        });
        gsap.to("#spanimg", {
          rotate: 180,
        });
      } else if (deltaY < 0) {
        gsap.to("span", {
          x: "0%",
          repeat: -1,
          duration: 4,
          ease: "none",
        });
        gsap.to("#spanimg", {
          rotate: 0,
        });
      }
    };

    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const currentY = e.touches[0].clientY;
      const deltaY = startY - currentY;
      handleScroll({ deltaY });
      startY = currentY;
    };

    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  const tl = gsap.timeline();
  useGSAP(() => {
    gsap.from("#text1", {
      x: -100,
      opacity: 0,
      duration: 2,
      delay: 1,
    });
    gsap.from("#img1", {
      x: 100,
      opacity: 0,
      duration: 2,
      delay: 1,
    });
    gsap.from("#text2", {
      x: 100,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: "#div1",
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => {
          gsap.to("#text2", { x: 0, opacity: 1, duration: 2 });
        },
        onLeaveBack: () => {
          gsap.to("#text2", { x: -100, opacity: 0, duration: 2 });
        },
      },
    });
    gsap.from("#text3", {
      x: -100,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: "#div2",
        start: "top 50%",
        end: "bottom 50%",
        scrub: 2,
        onEnter: () => {
          gsap.to("#text3", { x: 0, opacity: 1, duration: 2 });
        },
        onLeaveBack: () => {
          gsap.to("#text3", { x: 100, opacity: 0, duration: 2 });
        },
      },
    });
    gsap.from("#div3", {
      scale: 0,
      duration: 10,
      delay: 1,
      scrollTrigger: {
        trigger: "#div3",
        start: "top 80%",
        end: "bottom 80%",
        scrub: 2,
        onEnter: () => {
          gsap.to("#div3", { scale: 1, duration: 2 });
        },
        onLeaveBack: () => {
          gsap.to("#div3", { scale: 0, duration: 2 });
        },
      },
    });
    gsap.from("#text5", {
      x: 100,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: "#div4",
        start: "top 50%",
        scrub: 2,
        end: "bottom 50%",
        onEnter: () => {
          gsap.to("#text5", { x: 0, opacity: 1, duration: 2 });
        },
        onLeaveBack: () => {
          gsap.to("#text5", { x: -100, opacity: 0, duration: 2 });
        },
      },
    });
    gsap.from("#text6", {
      x: -100,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: "#div5",
        start: "top 50%",
        end: "bottom 50%",
        scrub: 2,
        onEnter: () => {
          gsap.to("#text6", { x: 0, opacity: 1, duration: 2 });
        },
        onLeaveBack: () => {
          gsap.to("#text6", { x: -100, opacity: 0, duration: 2 });
        },
      },
    });
    gsap.from("#text7", {
      x: 100,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: "#div6",
        start: "top 50%",
        end: "bottom 50%",
        scrub: 2,
        onEnter: () => {
          gsap.to("#text7", { x: 0, opacity: 1, duration: 2 });
        },
        onLeaveBack: () => {
          gsap.to("#text7", { x: 100, opacity: 0, duration: 2 });
        },
      },
    });
  });

  return (
    <>
      <div className="w-full min-h-screen flex flex-col md:flex-row justify-end md:justify-center items-center">
        <div
          id="text1"
          className="w-full flex flex-col justify-center items-center min-h-[40vh] md:min-h-[70vh]"
        >
          <div className="w-[60%] mt-32 md:mt-0 text-center">
            <h1 className="text-3xl md:mt-0 sm:text-4xl md:text-5xl font-medium">
              Prime Chemicals
            </h1>
            <h3 className="text-xl sm:text-xl md:text-2xl font-lighter">
              A Sign Of Quality
            </h3>
          </div>
          <div className="w-full px-3 max-w-3xl  text-center">
            <p className=" sm:text-lg md:text-xl">
              <i>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, ab numquam molestias at, deleniti maxime assumenda
                enim vero perferendis veritatis incidunt similique ad quasi
                corrupti repudiandae nemo eius earum quo. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Obcaecati, ab numquam
                molestias at, deleniti maxime assumenda enim vero perferendis
                veritatis incidunt similique ad quasi corrupti repudiandae nemo
                eius earum quo.
              </i>
            </p>
          </div>
        </div>

        <div
          id="img1"
          className="w-full md:w-[50%] pt-10 md:pt-0 min-h-[50vh] md:min-h-screen"
        >
          <div className="flex items-center justify-center w-full h-full p-4 md:p-0">
            <img
              src={image_1}
              alt="Image"
              className="w-[80%] md:w-[75%] mt-0 md:mt-40 lg:mt-28 md:h-[70%] rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
      <hr className="w-full border-0 mt-8 md:mt-0 bg-gradient-to-r from-transparent via-white/10 to-transparent h-[2px]" />

      <div className="w-full gap-x-5 h-[70px] my-3 md:my-12 overflow-hidden">
        <div id="span" className=" transform translate-x-0 flex">
          <span className="text-5xl flex justify-center pr-10 items-center gap-x-10 md:text-6xl whitespace-nowrap span-animation">
            A Sign Of Quality <IoArrowForward id="spanimg" />
          </span>
          <span className="text-5xl flex justify-center pr-10 items-center gap-x-10 md:text-6xl whitespace-nowrap span-animation">
            A Sign Of Quality <IoArrowForward id="spanimg" />
          </span>
          <span className="text-5xl flex justify-center pr-10 items-center gap-x-10 md:text-6xl whitespace-nowrap span-animation">
            A Sign Of Quality <IoArrowForward id="spanimg" />
          </span>
          <span className="text-5xl flex justify-center pr-10 items-center gap-x-10 md:text-6xl whitespace-nowrap span-animation">
            A Sign Of Quality <IoArrowForward id="spanimg" />
          </span>
        </div>
      </div>

      <hr className="w-full border-0 mb-12 bg-gradient-to-r from-transparent via-white/10 to-transparent h-[2px]" />

      <div className="w-full text-center py-10">
        <div id="div1" className="w-full h-[30px]">
          <h1
            id="text2"
            className="sm:text-4xl font-bold sm:font-normal text-lg"
          >
            ElectroPlating Chemicals Manfacturer and Distributor
          </h1>
        </div>
        <div className="w-full flex justify-center items-center h-[50px] mt-14 italic pt-10">
          <div
            id="div2"
            className="w-[300px] duration-500 hover:scale-105 hover:shadow-xl transition-all h-[50px] flex justify-center items-center border-[1px] border-white/50 rounded-full"
          >
            <h1
              id="text3"
              className="sm:text-4xl font-bold sm:font-normal text-lg"
            >
              Our Expertise
            </h1>
          </div>
        </div>
        <div
          id="div3"
          className="w-full place-items-center grid grid-cols-1 md:grid-cols-3 gap-4 p-5 my-14"
        >
          {Cards.map(({ id, name, desc, ankerLink, image }) => {
            return (
              <>
                <div
                  key={id}
                  style={{ backgroundImage: `url(${image})` }}
                  className="group w-full bg-cover bg-center overflow-hidden flex-row items-center jus md:w-[80%] h-[280px] shadow-xl cursor-pointer hover:scale-105 duration-500 transition-all rounded-lg bg-[#efdfd1] relative"
                >
                  <div className="absolute inset-0 bg-black/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out lg:block hidden">
                    <div className="h-[160px]">
                      <h1 className="text-2xl text-left pl-2 pt-4 text-white">
                        <i>
                          <b>{name}</b>
                        </i>
                      </h1>
                      <h3 className="text-md text-left pl-2 pt-2 text-white">
                        {desc}
                      </h3>
                    </div>
                    <div className="flex relative justify-center w-full h-[100px] items-center">
                      <a href={ankerLink}>
                        <button className="border border-white absolute bottom-0 right-6 bg-transparent text-white hover:scale-105 transition-all px-4 py-1 rounded-full hover:bg-white/20">
                          View More
                        </button>
                      </a>
                    </div>
                  </div>

                  <div className="lg:hidden relative bg-black/50 h-full block p-4">
                    <h1 className="text-2xl">
                      <i>
                        <b>{name}</b>
                      </i>
                    </h1>
                    <h3 className="text-md mt-2">{desc}</h3>
                    <a href={ankerLink}>
                      <button className=" absolute top-[80%] left-[35%] border border-white bg-transparent hover:scale-105 transition-all px-4 py-1 rounded-full hover:bg-black/10">
                        View More
                      </button>
                    </a>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <hr className="w-full border-0 bg-gradient-to-r from-transparent via-white/10 to-transparent h-[2px]" />

      <div
        id="div4"
        className="w-full my-3 md:my-5 sm:my-10 p-4 flex flex-col justify-center items-center text-center"
      >
        <h1 id="text5" className="sm:text-4xl font-bold sm:font-normal text-lg">
          We help customers to increase quality and profitability in their metal
          finishing business
        </h1>
      </div>
      <div className="w-full mb-6 p-4 relative flex flex-col md:flex-row">
        <div id="div5" className="md:w-1/2 h-[600px] md:sticky md:top-0">
          <div id="text6" className="w-full h-full p-4">
            <video
              src={video}
              controls
              className="w-full max-w-[632px] h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div
          id="div6"
          className="md:w-[50%] mt-4 md:mt-0 rounded-xl w-full p-4 h-[600px] flex flex-col justify-center items-center"
        >
          <div id="text7" className="w-full flex justify-center items-center">
            <h1 className="px-2 w-[180px] py-3 text-center text-xl my-3 hover:scale-105 text-[#aab7b7] bg-[#2e4156] duration-300  transition-all shadow-lg rounded-full">
              We Are Certified
            </h1>
          </div>
          <div
            id="text7"
            className="w-full h-[500px] relative rounded-xl bg-[#2e4156]"
          >
            <img
              src={img1}
              alt="Image"
              className="w-[150px] h-[150px] rounded-xl absolute top-4 left-4"
            />
            <img
              src={img2}
              alt=""
              className="w-[150px] h-[150px] rounded-xl absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
            />
            <img
              src={img3}
              alt=""
              className="w-[150px] h-[150px] rounded-xl absolute bottom-4 right-4"
            />
          </div>
        </div>
      </div>
      <hr className="w-full border-0 bg-gradient-to-r from-transparent mt-5 md:mt-20 via-white/10 to-transparent h-[2px]" />
    </>
  );
};

export default Home;