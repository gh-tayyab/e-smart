// pages/about.js

import Head from "next/head";

const About = () => {
  return (
    <div className="bg-gray-100 ">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-x-12 md:space-y-0">
          <div className="md:w-1/2">
            <img src="/about-image.png" alt="About Us" className="" />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg text-gray-800 leading-relaxed">
              Welcome to smart. online store, where passion meets fashion. Founded with a vision to
              redefine online shopping, we are dedicated to bringing you the
              latest trends and timeless classics, curated with care. Our
              journey began with a commitment to quality and customer
              satisfaction, offering a seamless shopping experience that blends
              style with convenience. Whether you're searching for everyday
              essentials or statement pieces that turn heads, we strive to cater
              to every taste and occasion. At smart. online store, we
              believe in celebrating individuality through fashion that empowers
              and inspires. Join us in exploring a world of endless
              possibilities, where every click brings you closer to expressing
              your unique style.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
