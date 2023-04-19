import {
  AboutUs,
  Icons,
  ImageTitle,
  Logo,
  MainTitle,
  Navigation,
  Slider,
} from './components';
import image from './assets/title.svg';

import './App.scss';

function App() {
  return (
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
        <section className='app__main-section'>
          <Slider />
          <AboutUs />
        </section>
      </main>
    </div>
  );
}

export default App;
