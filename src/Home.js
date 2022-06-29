import React from 'react';
import './Home.css';
import Product from "./Product";

function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684200_.jpg" 
            alt="Home-page"/>
        </div>
        <div className="home__row">
            <Product 
              id="00001"
              title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
              price={29.99}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
              rating={4}/>
            <Product 
              id="00002"
              title="Hapsters Urban Scooter Height-Adjustable Foldable Kick Scooter Dual Suspension Dual Brake Aluminium Alloy 100 KG Max for Adults"
              price={349.99}
              image="https://m.media-amazon.com/images/I/61g7RId2jSL._SL1500_.jpg"
              rating={5}/>
        </div>
        <div className="home__row">
            <Product 
              id="00003"
              title="Apple iPhone 13 (256GB) - Midnight"
              price={999.99}
              image="https://m.media-amazon.com/images/I/61VuVU94RnL._SL1500_.jpg"
              rating={5}/>
            <Product 
              id="00004"
              title="OnePlus 10R 5G (Forest Green, 8GB RAM, 128GB Storage, 80W SuperVOOC)"
              price={499.99}
              image="https://m.media-amazon.com/images/I/716uVx3Wr5L._SL1500_.jpg"
              rating={4}/>
            <Product 
              id="00005"
              title="Google Pixel 6 (Black, 8GB RAM, 128GB Storage)"
              price={449.99}
              image="https://m.media-amazon.com/images/I/61OJJSFEkBL._SL1500_.jpg"
              rating={3}/>    
        </div>
        <div className="home__row">
            <Product 
              id="00006"
              title="Amazon Brand - Solimo Freesia Fabric 6 Seater RHS L Shape Sofa (Grey & Black)"
              price={1499.99}
              image="https://m.media-amazon.com/images/I/81Yj9IrdswL._SL1500_.jpg"
              rating={4}/>
        </div>
    </div>
  );
}

export default Home