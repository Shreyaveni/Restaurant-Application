import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>We take food seriously, nothing else.</p>
            </div>
            <p className="mid">
              We believe in crafting unforgettable culinary experiences that
              combine tradition with creativity. Whether you crave classic
              flavors or bold new tastes, our passion for quality shines through
              every dish. Our goal is to bring people together over a shared
              love for delicious food, creating memories with every bite.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;