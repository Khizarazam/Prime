import React from "react";
import { Link } from "react-router-dom";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const Tags = [
    { name: 'We Are', path: '/we-are' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="w-full rounded-t-lg bg-[#1d1b8e] text-white mt-20">
      <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-y-5 sm:gap-8 md:grid-cols-3 place-items-center md:place-items-center">
          <div className="text-center md:text-left">
            <p className="tracking-wide text-sm sm:text-base">
              Copyright © Prime Chemicals 1990-2020.
            </p>
            <p className="tracking-wide text-sm sm:text-base">
              All rights reserved.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {Tags.map((tag, index) => (
              <Link
                key={index}
                to={tag.path}
                className="text-white hover:text-gray-300 transition-colors duration-200 text-sm sm:text-base"
              >
                {tag.name}
              </Link>
            ))}
          </nav>

          <div className="flex justify-center gap-x-6">
            <FaSquareFacebook className="text-2xl sm:text-3xl cursor-pointer hover:text-gray-300 transition-colors duration-200" />
            <FaSquareTwitter className="text-2xl sm:text-3xl cursor-pointer hover:text-gray-300 transition-colors duration-200" />
            <MdEmail className="text-2xl sm:text-3xl cursor-pointer hover:text-gray-300 transition-colors duration-200" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
