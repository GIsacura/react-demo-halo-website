//React
import React from 'react';
import Banner from '../Components/Banner';

//Components
import Multiplayer from '../Components/Multiplayer';
import Store from '../Components/Store';
import VideoSlider from '../Components/VideoSlider';

const Home = () => {
  return (
    <div className='main-container'>
      <Banner/>
      <VideoSlider/>
      <Multiplayer/>
      <Store/>
      <footer></footer>
    </div>
  );
};

export default Home;