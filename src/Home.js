import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="10201020"
            title="Samsung 138 cm (55 Inches) Wondertainment Series Ultra HD LED Smart TV UA55TUE60AKXXL (Titan Gray) (2020 model)"
            price={51990.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81a5%2BITwX4L._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321348"
            title="HP Pavilion Gaming 9th Gen Intel Core i5 Processor 15.6-inch FHD Gaming Laptop (8GB/1TB HDD + 256GB SSD/Windows 10/4GB NVIDIA GTX 1050/Shadow Black), 15-dk0045TX"
            price={78950.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81Cxu5r4O%2BL._SL1500_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={23443.94}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
          <Product
            id="22414114"
            title="Samsung Galaxy Note 20 (Mystic Bronze, 8GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers"
            price={77999.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71HQNbn0LFL._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung Galaxy Watch (Bluetooth, 42 mm) - Black"
            price={15990.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61ErvNimpvL._SL1500_.jpg"
          />
          <Product
            id="4903852"
            title="Legend of Suheldev: The King Who Saved India Paperback – 20 June 2020"
            price={291.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/91HT7rB8tfL.jpg"
          />
          <Product
            id="23445930"
            title="Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)"
            price={3499.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"
          />
          <Product
            id="32543543"
            title="Apple iPad Pro (11-inch, Wi-Fi, 128GB) - Silver (2nd Generation) "
            price={58756.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/815a%2BXjrgvL._SX466_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12444141"
            title="Samsung Galaxy Buds Live (SM-R180NZKAINU) Mystic Black"
            price={14990.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71cSYFuuCGL._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90827332"
            title="Home Centre Silas Lounge Chair with Footrest Black"
            price={18990.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/81GRpFfD2GL._AC_UL320_.jpg"
          />
          <Product
            id="75466462"
            title="MISURAA Imported Shadow Grey Ergonomic Chair with Mesh Back and Foam Seat for Office "
            price={11999}
            rating={4}
            image="https://m.media-amazon.com/images/I/61XEeDats+L._AC_UL320_.jpg"
          />
          <Product
            id="75466464"
            title="Apple MacBook Pro "
            price={199900}
            rating={5}
            image="https://m.media-amazon.com/images/I/71L2iBSyyOL._AC_UY218_.jpg"
          />
          <Product
            id="75466463"
            title="Canon EOS 1500D 24.1 Digital SLR Camera (Black)"
            price={31490}
            rating={5}
            image="https://m.media-amazon.com/images/I/914hFeTU2-L._AC_UY218_.jpg"
          />
          <Product
            id="75466467"
            title="Blue Yeti USB Mic"
            price={12499}
            rating={4}
            image="https://m.media-amazon.com/images/I/81Ac7KMx7RL._AC_UL320_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
