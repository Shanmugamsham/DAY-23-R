
import './App.css'
import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Cards from './Cards';

const App = () => {
   const card_data=[{images: "https://res.cloudinary.com/ddjjx7t57/image/upload/v1708749442/Arcticsky_9_deztfr.png",
heading: "OnePlus" ,price: "$400.00 to 800.00",cols: "col-12 col-md-6 col-lg-3 mt-5",sale: true},
   {images: "https://res.cloudinary.com/ddjjx7t57/image/upload/v1708749441/pms_1591083226.35839520_400x400_85_ylxtmr.jpg",
   heading: "Redmi" ,price: "$450.00 to 680.00",cols: "col-12 col-md-6 col-lg-3 mt-5",sale: false},{images: "https://res.cloudinary.com/ddjjx7t57/image/upload/v1708762962/1683286284Rog-phone-6-800x800_one_to_one_a5tusr.webp",
  heading: "Asus" ,price: "$540.00 to 880.00",cols: "col-12 col-md-6 col-lg-3 mt-5",sale: false},{images: "https://res.cloudinary.com/ddjjx7t57/image/upload/v1708762800/1-m00-51-88-cpgm7wsykruahbobaardu7ablie779_jpinmc.png",
   heading: "OnePlus Note" ,price: "$450.00 to 980.00",cols: "col-12 col-md-6 col-lg-3 mt-5",sale: true},{images: "https://res.cloudinary.com/ddjjx7t57/image/upload/v1708763398/iphone_15_pro_max_black_titanium_pdp_image_position-1__wwen_mjlv5l.webp",
   heading: "iPhone 15 pro" ,price: "$40.00 to 80.00",cols: "col-12 col-md-6 col-lg-3 mt-5",sale: false},{images: "https://res.cloudinary.com/ddjjx7t57/image/upload/v1708763632/51w5z3wOpTL._SL1000_-1200x1200_s4yy8i.webp",
 heading: "Realme" ,price: "$340.00 to 580.00",cols: "col-12 col-md-6 col-lg-3 mt-5",sale: true},{images: "https://res.cloudinary.com/ddjjx7t57/image/upload/v1708763090/iphone-12_pg1wf7.jpg",
 heading: "iPhone 12" ,price: "$540.00 to 680.00",cols: "col-12 col-md-6 col-lg-3 mt-5",sale: true},{images: "https://res.cloudinary.com/ddjjx7t57/image/upload/v1708763543/OPPO-A79-5G-Glowing-Green-main_vhamim.jpg",
   heading: "Oppo" ,price: "$240.00 to 480.00",cols: "col-12 col-md-6 col-lg-3 mt-5",sale: false},]

   

  return (
    <div>
      <Navbar/>
      <Banner/>
      <div className='container'>
        <div className='row'>
       {card_data.map((d,index)=>(<Cards key={index} images={d.images} heading={d.heading} price={d.price} cols={d.cols} sale={d.sale}/>))} 
    </div>
    </div>
    </div>
  );
};

export default App;