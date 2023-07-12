import React, {useState} from "react";
import { Carousel } from 'react-carousel3';
import IMG_1 from './assets/images/img_1.jpeg'
import IMG_2 from './assets/images/img_2.jpeg'
import IMG_3 from './assets/images/img_3.jpeg'
import IMG_4 from './assets/images/img_4.jpeg'
import IMG_5 from './assets/images/img_5.jpeg'
import IMG_6 from './assets/images/img_6.jpeg'
const style = {
  width: 150,
  height: 150,
};
const arrIMG = [
  IMG_1,
  IMG_2,
  IMG_3,
  IMG_4,
  IMG_5,
  IMG_6
]
const innerHeight = window.innerHeight
const innerWidth = window.innerWidth

const Gallery = () => {
  return (
    <div className="gallery">
      <Carousel height={innerHeight} width={innerWidth} yOrigin={innerHeight / 5} xOrigin={innerWidth / 1.8} yRadius={innerHeight / 10} xRadius={innerWidth / 2} autoPlay={true}>
        {arrIMG.map((item, index) => {
          return (
            <div key={index} style={style}>
              <img style={{ borderRadius: '15px', boxShadow: 'rgb(227, 228, 230) 0px 20px 30px -10px' }} height={210} width={120} alt="" src={item} />
            </div>
          );
        })}
      </Carousel>
    </div>
  )
}

export default Gallery