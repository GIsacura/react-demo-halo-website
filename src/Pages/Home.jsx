//React
import React from 'react';

//Components
import Multiplayer from '../Components/Multiplayer';
import Store from '../Components/Store';
import VideoSlider from '../Components/VideoSlider';

const Home = () => {
  return (
    <div className='main-container'>
      <VideoSlider/>
      <Multiplayer/>
      <Store/>
      <footer></footer>
    </div>
  );
};

export default Home;