import React, { useEffect } from 'react';
import Masonry from 'react-masonry-css';

     import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './homepage.css';

export default function HomePage() {
  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);

  const photos = ['/image1.jpg','/image2.jpg','/image3.jpg',
                  '/image4.jpg','/image5.jpg','/image6.jpg','/image7.jpg','/image8.jpg','/image9.jpg',
                  '/image10.jpg','/image11.jpg','/image12.jpg','/image13.jpg','/image14.jpg','/image15.jpg','/image16.jpg'];
                  
  const masonryCols = { default: 4, 1100: 2, 400: 2 };

  return (
    <>
  
      <section id="hero" className="hero" data-aos="fade-in">
        <video autoPlay loop muted className="hero-video">
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="hero-content">
          <h3>TIMELESS MOMENTS , MASTERFULLY CAPTURED</h3>
          <p>explore the diverse range of photography project we have brought to life for our clients</p>
        </div>
      </section>

      <section id="gallery" className="gallery" data-aos="fade-up">
        <h1>Our Portfolio</h1>
        <Masonry
          breakpointCols={masonryCols}
          className="masonry-grid"
          columnClassName="masonry-col"
        >
          {photos.map((src,i) => (
            <img
              key={i}
              src={src}
              alt={`Portfolio ${i+1}`}
              data-aos="zoom-in"
              className="gallery-img"
            />
          ))}
        </Masonry>
      </section>

      <section id="about" className="about" data-aos="fade-right">
        <h1>About Us</h1>
        <p>Prashant patil photography is a team of top candid wedding photographers and wedding filmers in India. Prashant patil photography is headed by prashant patil   who are one of the pioneers in the field of candid wedding photography in India.</p>
<p>Prashant patil photography has a team of highly experienced and internationally acclaimed wedding photographers and cinematographers specialising in wedding photography in India. Prashant patil photography also offers luxury and lifestyle shoots including celebrity weddings, stylised bridal portraits, glamour portraits, creative pre-wedding and engagement shoot at off-beat locations.Over the years, We’ve worked with amazing people across the globe, been part of the biggest days of their lives and made everlasting memories for them. We look forward to creating some for you too!</p>

      </section>

      


<section id="contact" className="contact" data-aos="fade-up">
  <h1 className="section-title">Contact</h1>

  <div className="contact-container">
    <div className="contact-box">
      <FaPhone className="contact-icon" />
      <p><b>Phone:</b><br />7058483010 / 8686584444</p>
    </div>

    <div className="contact-box">
      <FaEnvelope className="contact-icon" />
      <p><b>Email:</b><br />abc@gmail.com</p>
    </div>

    <div className="contact-box">
      <FaMapMarkerAlt className="contact-icon" />
      <p><b>Address:</b><br />Adalat Road, Gangakhed, Maharashtra</p>
    </div>
  </div>
</section>


    </>
  );
}
