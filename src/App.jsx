import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
// import './Components/LocoStyle.css'
import gsap from "gsap";

const App = () => {
  const scrollRef = useRef(null);
  const scrollInstance = useRef(null);

  useEffect(() => {
    if (!scrollInstance.current) {
      scrollInstance.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        useNativeScroll: true,
        multiplier: 3,
        smartphone: {
          smooth: true,
          multiplier: 10,
        },
        tablet: {
          smooth: true,
          multiplier: 10,
        },
      });
    }

    const handleRouteChange = () => {
      if (scrollInstance.current) {
        scrollInstance.current.update();
      }
    };

    const handleMouseMove = (e) => {
      gsap.to("#cursor", {
        x: e.clientX + 9,
        y: e.clientY + 30,
        duration: 0.8,
        ease: "Power2.to",
      });
    };

    window.addEventListener("popstate", handleRouteChange);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (scrollInstance.current) {
        scrollInstance.current.destroy();
      }
      window.removeEventListener("popstate", handleRouteChange);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (scrollInstance.current) {
        scrollInstance.current.update();
      }
    };

    window.addEventListener("resize", handleResize);

    if (scrollInstance.current) {
      scrollInstance.current.update();
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        id="cursor"
        className="w-4 h-4 hidden lg:block rounded-full bg-[#aab7b7] fixed z-[99]"
      ></div>
      <div
        data-scroll-section
        className="fixed text-[#aab7b7] bg-black/25 top-0 left-0 right-0 z-[100]"
      >
        <Navbar />
      </div>
      <main
        data-scroll-container
        data-scroll-speed="1"
        ref={scrollRef}
        className="text-[#aab7b7] selection:bg-zinc-800 bg-[linear-gradient(to_left,_#1a2d42_50%,_#aab7b7_250%)]"
      >
        <div data-scroll-section data-scroll-speed="2">
          <Outlet />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default App;