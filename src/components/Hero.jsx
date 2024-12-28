import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="Hero">
      <div className="text">
        <h1>
          TATA STARBUCKS SIMPLE RECIPE FOR COFFEE BACON DONUTS MAKES A STICKY.
        </h1>
        <p>
          The aroma of freshly brewed coffee fills the air, blending perfectly
          with the sweet scent of caramelized bacon. Together, they create a
          delightful symphony of flavors in the form of a perfectly glazed donut
        </p>

        <div className="order-btn">
          <button className="Order-Your-Brew">Order Your Brew</button>
          <button className="Explore-the-Menu">Explore the Menu</button>
        </div>

        <div>
          <p>Also available on</p>
          <div className="apps">
            <img src="\public\mcdonalds.jpg" />
            <img src="\public\swiggy.jpg" />
            <img src="\public\zomato1.png" />
          </div>
        </div>
      </div>
      <div className="starbuck-cup">
        <img src="\public\starbuck2.avif" width="60%" />
      </div>
    </div>
  );
};

export default Hero;
