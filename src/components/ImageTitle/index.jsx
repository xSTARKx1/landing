import titleImage from '../../assets/title.svg';

import './index.scss';

const ImageTitle = () => {
  return (
    <div className='title-image'>
      <img src={titleImage} alt='title image' />
    </div>
  );
};

export default ImageTitle;
