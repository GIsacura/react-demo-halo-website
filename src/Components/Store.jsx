import React from 'react';

const Store = () => {
  return (
    <section id="get-the-game">
      <h2>Get the game.</h2>

      <div className="item-store">
        <div className="left">
          <img src="./assets/images/game.png" alt="game-cover"/>
        </div>

        <div className="right">
          <div className="info-product">
            <h3>Halo Infinite (Campaign)</h3>
            <h4>Included with Xbox Game Pass Play Halo</h4>
            <p>
              Infinite and over 100 more high-quality games for one low monthly price with Xbox Game Pass.
            </p>
            <button className="green-button">
              JOIN XBOX GAME PASS
              <span className="material-icons">&#xe5cc;</span>
            </button>

            <h4>Buy Halo Infinite</h4>
            <p>59.99$ USD</p>
            <select name="" id="">
              <option value="xbox">Xbox</option>
              <option value="windows">Windows 10 PC</option>
              <option value="steam">Steam</option>
            </select>
            <p className="green-button">
              BUY NOW
              <span className="material-icons">&#xe5cc;</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Store;