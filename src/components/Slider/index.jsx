import Slider from 'react-slick';

import { sliderData } from '../../data';

import 'slick-carousel/slick/slick.css';
import './index.scss';

const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
  };

  return (
    <div className='slider'>
      <h2 className='slider__title'>CHOOSE LOOKS</h2>

      <Slider {...settings}>
        {sliderData.map((image) => {
          const { id, imageLink } = image;
          return (
            <div key={id} className='slider__image-container'>
              <div
                className='slider__image'
                style={{
                  backgroundImage: `url(${imageLink})`,
                }}
              ></div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderComponent;
