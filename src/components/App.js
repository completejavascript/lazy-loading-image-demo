import React, { Component } from 'react';
import LazyImage from './lazy-image';
import FolkMe from './Folkme';
import './App.css';
import placeHolder from '../images/place-holder.png';
import img1 from '../images/01.jpg';
import img2 from '../images/02.jpg';
import img3 from '../images/03.jpg';
import img4 from '../images/04.jpg';
import img5 from '../images/05.jpg';
import img6 from '../images/06.jpg';
import img7 from '../images/07.jpg';
import img8 from '../images/08.jpg';
import img9 from '../images/09.jpg';
import img10 from '../images/10.jpg';
import img11 from '../images/11.jpg';
import img12 from '../images/12.jpg';
import img13 from '../images/13.jpg';
import img14 from '../images/14.jpg';
import img15 from '../images/15.jpg';
import img16 from '../images/16.jpg';
import img17 from '../images/17.jpg';
import img18 from '../images/18.jpg';

const LazyImageWrapper = props => (
  <div className="cell">
    <LazyImage
      placeHolder={placeHolder}
      src={props.src}
      width={`100%`}
      height={`auto`}
      effect={"opacity"}
      alt={props.alt}
    />
    <div className="caption">{props.alt}</div>
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="app">
        <h2 className="title">Scroll down to check out these beautiful girls...</h2>

        <div className="grid">
          <LazyImageWrapper src={img1} alt={`img 1`} />
          <LazyImageWrapper src={img2} alt={`img 2`} />
          <LazyImageWrapper src={img3} alt={`img 3`} />
          <LazyImageWrapper src={img4} alt={`img 4`} />
          <LazyImageWrapper src={img5} alt={`img 5`} />
          <LazyImageWrapper src={img6} alt={`img 6`} />
          <LazyImageWrapper src={img7} alt={`img 7`} />
          <LazyImageWrapper src={img8} alt={`img 8`} />
          <LazyImageWrapper src={img9} alt={`img 9`} />
          <LazyImageWrapper src={img10} alt={`img 10`} />
          <LazyImageWrapper src={img11} alt={`img 11`} />
          <LazyImageWrapper src={img12} alt={`img 12`} />
          <LazyImageWrapper src={img13} alt={`img 13`} />
          <LazyImageWrapper src={img14} alt={`img 14`} />
          <LazyImageWrapper src={img15} alt={`img 15`} />
          <LazyImageWrapper src={img16} alt={`img 16`} />
          <LazyImageWrapper src={img17} alt={`img 17`} />
          <LazyImageWrapper src={img18} alt={`img 18`} />
        </div>

        <FolkMe
          targetURL={this.props.url}
          color="#fff"
          backgroundColor="#000"
          position="right"
          size="100px"
          ariaLabel="View source on Github"
        />
      </div>
    );
  }
}

export default App;
