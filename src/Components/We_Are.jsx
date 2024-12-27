import React from "react";
import basharatimg from "../assets/basharat-awan.jpg";
import shazerimg from "../assets/shazer-awan.jpg";

const We_Are = () => {
  return (
    <>
      <div className="w-full pt-20">
        <div className="w-full py-3 flex justify-start pl-8 items-center">
          <h1 className="text-4xl text-white">We Are</h1>
        </div>
        <div className="w-full py-5 flex justify-start items-start pl-8">
          <h1 className="text-2xl italic text-blue-400 uppercase">
            Company OverView:
          </h1>
        </div>
        <div className="w-full tracking-tight text-justify leading-none px-8">
          <p>
            <b className="text-lg text-blue-400">Prime Chemicals </b>is a full
            line{" "}
            <b className="text-lg text-blue-400">
              Electroplating Chemicals Manufacturer and Distributor.
            </b>{" "}
            It supplies chemicals, raw materials, plants and accessories to the
            market place.{" "}
            <b className="text-lg text-blue-400">Prime Chemicals</b>, in
            addition, also provides training and consulting services. The
            company also provides with on-site maintenance for the process with
            the help of its technical support team. This greatly reduces the
            production losses incurred in case of process anomalies. The company
            also offers free chemical analysis for various processes it offers.
            The technical experts also help the clients to achieve their quality
            and production objectives by studying the process details. The
            company offers consultation and turnkey projects for its clients.
            <br />
            <br /> Our
            <b className="text-lg text-blue-400">Technical Support Team</b>{" "}
            works by helping you to use our technology and expertise in your
            Metal Finishing business. By giving you all the information and
            training through various aspects of plant design and installation,
            we ensure increase in productivity and improve your profitability.
            <br />
            <br /> The{" "}
            <b className="text-lg text-blue-400">
              company also offers its expertise
            </b>{" "}
            in the field of electroplating and surface treatment formulations.
            The company offers to collaborate with companies with similar
            interests to provide better products and technologies at a very
            competitive price in various markets. The company has a belief in
            the ideology that there is more prospect of growth in sharing the
            results of Research and Development in any field thus having a
            combined effort.
          </p>
        </div>
      </div>
      <hr className="w-full border-0 bg-gradient-to-r from-transparent mt-5 md:mt-20 via-white/10 to-transparent h-[2px]" />
      <div className="w-full my-10 md:my-20 px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          <img
            src={basharatimg}
            alt="Basharat Javed Awan"
            className="w-full md:w-[30%] rounded-lg shadow-xl h-[250px] md:h-[350px] object-cover"
          />
          <div className="w-full md:w-[70%] bg-[linear-gradient(to_bottom,_#1a2d42_50%,_#aab7b7_250%)] rounded-lg p-4">
            <h1 className="text-xl md:text-2xl font-bold text-blue-400">
              Basharat Javed Awan <br /> CEO & Founder
            </h1>
            <p className="mt-2 leading-tight text-justify">
              Mr. Basharat, CEO and founder of Prime Chemicals, has over 35
              years of experience in the surface finishing industry with an
              extensive background in plating shop management and operations. He
              is a member of Paksitan Association of Automotive Parts &
              Accessories Manufacturers{" "}
              <b className="text-lg text-blue-400">
                <i>(PAAPAM)</i>
              </b>
              . Mr. Basharat has advised on product strategies and market trends
              with plating shops and distribution partners to help them grow
              their businesses. Mr. Basharat holds a B.S. Degree in Chemical
              Engineering from University of the Punjab.
            </p>
          </div>
        </div>

        <div className="flex mt-5 flex-col md:flex-row gap-6">
          <div className="w-full md:w-[70%] bg-[linear-gradient(to_bottom,_#1a2d42_50%,_#aab7b7_250%)] rounded-lg p-4 order-2 md:order-1">
            <h1 className="text-xl md:text-2xl font-bold text-blue-400">
              Shazer Javed Awan <br /> Director Production
            </h1>
            <p className="mt-2 leading-tight text-justify">
              Shazer is a young and passionate chemical engineer. Shazer holds a
              B.S. Degree in Chemical Engineering from University of Engineering
              and Technology.
            </p>
          </div>
          <img
            src={shazerimg}
            alt="Shazer Javed Awan"
            className="w-full order-1 md:order-2 md:w-[30%] rounded-lg shadow-xl h-[250px] md:h-[350px] object-cover"
          />
        </div>
      </div>
      <hr className="w-full border-0 bg-gradient-to-r from-transparent mt-5 md:mt-20 via-white/10 to-transparent h-[2px]" />
      {/* <div className="w-full h-[600px] my-20">
        <div className="w-full flex justify-center items-center h-[50px] mt-14 italic pt-10">
          <div className="w-[300px] duration-500 hover:scale-105 hover:shadow-xl transition-all h-[50px] flex justify-center items-center border-[1px] border-white/50 rounded-full">
            <h1 className="sm:text-4xl font-bold sm:font-normal text-lg">
              What We Do
            </h1>
          </div>
        </div>
        <div className=" w-full my-10 ">

        </div>
      </div> */}
      {/* <hr className="w-full border-0 bg-gradient-to-r from-transparent mt-5 md:mt-20 via-white/10 to-transparent h-[2px]" /> */}
    </>
  );
};

export default We_Are;