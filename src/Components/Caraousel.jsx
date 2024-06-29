import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.module.css"
import React from 'react'
import { border, Box } from "@chakra-ui/react";
import { BiBorderRadius } from "react-icons/bi";
const ImageSlider = () => {
    const images = [
    {
        id: 2,
        src: "https://t4.ftcdn.net/jpg/05/08/17/01/360_F_508170187_4Oonk4IG8u9eyfwSUvTASkT8hl71vRX2.jpg",
        alt: "Image 2 "
    },
    
    {
        id: 4,
        src: "https://indiater.com/wp-content/uploads/2021/09/furniture-and-interior-detail-store-promotion-sale-ads-banner-on-yellow-floor-and-background.jpg",
        alt: "Image 4"
    }
    ];
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
  autoplaySpeed: 3500,
   
  };
  return (
    <>

      <div className="imgslider" style={{width:"80%" ,align:"center" ,margin:"auto", }}>
        <Box  mt="2">
        <Slider {...settings}>
          {images.map((item) => (
            <div key={item.id}>
              <img style={{borderRadius:"20px"}} src={item.src}  alt={item.alt} />
            </div>
          ))}
        </Slider>
        </Box>
      </div>
          </>
  )
}
export default ImageSlider;