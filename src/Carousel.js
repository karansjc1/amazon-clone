import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";

export default () => (
  <Carousel autoPlay infiniteLoop>
    <div>
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg"
        alt=""
      />
    </div>
    <div>
      <img
        alt=""
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/GWTO/PostLaunch/Uber/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launchtall-hero_1500x600_1._CB405488972_.jpg"
      />
    </div>
    <div>
      <img
        alt=""
        src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
      />
    </div>
    <div>
      <img
        alt=""
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Audio/Edict/r02/1/Edict_GW_1500x600._CB406612940_.png"
      />
    </div>
  </Carousel>
);
