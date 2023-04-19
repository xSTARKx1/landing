import Fade from 'react-reveal/Fade';

import {
  AboutUs,
  Icons,
  ImageTitle,
  Logo,
  MainTitle,
  Navigation,
  Slider,
} from './components';
import blueLine from './assets/line.svg';

import './App.scss';

function App() {
  return (
    <div className='app-wrapper'>
      <img src={blueLine} alt='blue line' className='line' />
      <div className='app'>
        <header className='app__header'>
          <Logo />
          <Navigation />
          <button className='app__header-button'>Buy</button>
        </header>
        <main>
          <div className='app__banner-section'>
            <div className='app__banner-section--text-wrapper'>
              <Icons />
              <MainTitle />
            </div>
            <ImageTitle />
          </div>
          <Fade>
            <section className='app__main-section'>
              <Slider />
              <Fade bottom>
                <AboutUs />
              </Fade>
            </section>
          </Fade>
        </main>
      </div>
    </div>
  );
}

export default App;
