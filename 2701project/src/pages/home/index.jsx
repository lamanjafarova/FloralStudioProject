import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Img1 from "../../images/sl1.jpg"
import Img2 from "../../images/sl2.jpg"
import Img3 from "../../images/sl3.jpg"
import SectionImg from "../../images/b4.jpg"
import Port1 from "../../images/portr1.jpg"
import Port2 from "../../images/portr2.jpg"
import Port3 from "../../images/portr3.jpg"
import "./index.scss"
import FlowersCards from '../../components/cards';
import { Helmet } from 'react-helmet';

const HomePage = ({wishList, setWishList}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  return (
    <div id='home'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Floral Studio</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="home-page">
      <Slider {...settings}>
          <div className='image-1'>
            <img src={Img1} alt="" className='img-1' />
            <div className="text">
              <h2 className='carusel-h2'>Excellent bouquets for you</h2>
            </div>
          </div>
          <div className='image-1'>
            <img src={Img2} alt="" className='img-1'/>
            <div className="text">
              <h2 className='carusel-h2'>Excellent bouquets for you</h2>
            </div>
          </div>
          <div className='image-1'>
            <img src={Img3} alt="" className='img-1' />
            <div className="text">
              <h2 className='carusel-h2'>Excellent bouquets for you</h2>
            </div>
          </div>
        </Slider>

      <div className="Section-1">
      <div className="container">
          <div className="mission">
      <div className="our-mission">
      <div className="left-side">
              <h3 className='left-side-h3'>Our Mission</h3>
              <p className='left-side-p'>Lorem ipsum dolor sit amet, pri omnium verterem id, sit labore dicunt an, ea civibus.</p>
              <button className='left-side-btn'>Read More</button>
            </div>
            <div className="right-side">
              <img src={SectionImg} alt="" className='right-side-img'/>
            </div>
      </div>
          </div>
        </div>
      </div>

      <div className="cards">
        <FlowersCards wishList={wishList} setWishList={setWishList} />
      </div>
      <div className="events">
        <div className="container">
          <h6 className='event-h6'>Devoted to wonderful beauty</h6>
          <h1 className='event-h1'>Events Pricing</h1>
          <div className="event-cards">
            <div className="event-card">
              <p className='event-p'>$16 <span className='event-span'>per table</span></p>
              <h5 className='event-h5'>Birthday Events</h5>
              <p className='event-p-text'>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
              <button className='event-btn'>Shop Now</button>
            </div>
            <div className="event-card">
              <p className='event-p'>$31 <span className='event-span'> per table</span></p>
              <h5 className='event-h5'>Wedding Events</h5>
              <p className='event-p-text'>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
              <button className='event-btn'>Shop Now</button>
            </div>
            <div className="event-card">
              <p className='event-p'>$52 <span className='event-span'> per table</span></p>
              <h5 className='event-h5'>Party Events</h5>
              <p className='event-p-text'>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
              <button className='event-btn'>Shop Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="our-team">
        <div className="container">
          <div className="our-teams">
            <h6 className='team-h6-title'>Contacts</h6>
            <h1 className='team-h1-title'>Our Team</h1>
            <div className="our-team-text">
            <div className="team">
              <img src={Port1} alt="" className='team-img'/>
              <h2 className='team-h2'>Velva Kopf</h2>
              <h6 className='team-h6'>Biologist</h6>
            </div>
            <div className="team">
              <img src={Port2} alt="" className='team-img'/>
              <h2 className='team-h2'>Sarah Palmer</h2>
              <h6 className='team-h6'>Florist</h6>
            </div>
            <div className="team">
              <img src={Port3} alt="" className='team-img'/>
              <h2 className='team-h2'>Jessica Swift</h2>
              <h6 className='team-h6'>Photographer</h6>
            </div>
            </div>
          </div>
        </div>
      </div>


      </div>
      


    </div>
  )
}

export default HomePage