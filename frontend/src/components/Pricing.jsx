import { Check } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/pricing.jpg",
      title: "QUARTERLY",
      price: 1800,
      length: 3,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "HALF_YEARLY", // fixed typo here
      price: 3400,
      length: 6,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "YEARLY",
      price: 6700,
      length: 12,
    },
  ];

  return (
    <section className="pricing">
      <h1>ELITE EDGE FITNESS PLANS</h1>
      <div className="wrapper">
        {pricing.map(({ imgUrl, title, price, length }) => (
          <div className="card" key={title}>
            <img src={imgUrl} alt={`${title} Package`} />
            <div className="title">
              <h1>{title}</h1>
              <h1>PACKAGE</h1>
              <h3>Rs {price}</h3>
              <p>For {length} Months</p>
            </div>
            <div className="description">
              <p>
                <Check /> Equipment
              </p>
              <p>
                <Check /> All Day Free Training {/* fixed typo here */}
              </p>
              <p>
                <Check /> Free Restroom
              </p>
              <p>
                <Check /> 24/7 Skilled Support
              </p>
              <p>
                <Check /> 20 Days Freezing Option
              </p>
              <Link to={"/"}>Join Now</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
