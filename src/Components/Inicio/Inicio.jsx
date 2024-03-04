import { useState, useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { cafes } from '../Conts/Conts';

const About = () => {
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const menu = document.querySelector('#menu-btn');

    menu.onclick = () => {
      setMenuActive(prevMenuActive => !prevMenuActive);
    };

    window.onscroll = () => {
      setMenuActive(false);
    };

    const swiper = new Swiper('.review-slider', {
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: true,
      grabCursor: true,
      autoplay: {
        delay: 2000, // Cambiar la velocidad del carrusel a 2 segundos
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        }
      }
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <>
      <section className="home" id="home">
        <div className="row">
          <div className="content">
            <h3 className="letra">
              Tu guía definitiva para descubrir los mejores lugares de café y cafeterías en el encantador Quindío.
            </h3>
            <a href="#menu" className="btn-about">
              Cafeterías en el <br /> encantador Quindío
            </a>
          </div>

          <div className="image">
            <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/tn273iuby9xxzjvar07k" className="main-home-image" alt="" />
          </div>
        </div>

        <div className="image-slider">
          <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/tn273iuby9xxzjvar07k" alt="" />
          <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/rdvteijamuubi7movsux" alt="" />
          <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/prrh7u9m6wczw928mmwo" alt="" />
        </div>
      </section>

      <section className="menu" id="menu">
        <h1 className="heading">Lugares más populares</h1>

        <div className="box-container">
          {cafes.map((cafe, index) => (
            <div className="box" key={index}>
              <div className="content">
                <h3>{cafe.titulo}</h3>
                <br />
                <div className="image-gallery">
                  <img src={cafe.imagen} alt="" />
                </div>
                <p>{cafe.mensaje}</p>
                <NavLink to={cafe.ruta} className="btn-link">
                  <button className="btn">Ver más</button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <h1 className="heading">Acerca de nosotros <span>por qué elegirnos</span></h1>
        <div className="row">
          <div className="image">
            <img src="image/persona.webp" alt="" />
          </div>
          <div className="content">
            <h3 className="title">¡Lo que nos hace especiales!</h3>
            <p>
              Bienvenidos a <b>Tu Café</b> . Somos un equipo apasionado de amantes del café y viajeros locales comprometidos en ayudarte a explorar la rica cultura cafetera de esta región.
              <br />
              Nuestra misión es brindarte una experiencia única alrededor del café, destacando los rincones más acogedores y auténticos en los pueblos del Quindío. Entendemos que el café es más que una bebida; es una historia que conecta personas, lugares y tradiciones. A través de nuestra plataforma, queremos compartir contigo la magia que se encuentra en cada taza y en cada rincón de esta hermosa tierra cafetera.
            </p>
            <div className="icons-container">
              <div className="icons">
                <img src="image/about-icon-1.png" alt="" />
                <h3>café de calidad</h3>
              </div>
              <div className="icons">
                <img src="image/about-icon-2.png" alt="" />
                <h3>Lugares de alta Calidad</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="review" id="review">
        <h1 className="heading">Opiniones <span>Lo que Dicen los Clientes</span></h1>

        <div className={`navbar ${menuActive ? 'active' : ''}`}>
          <button id="menu-btn">Toggle Menu</button>
          {/* Contenido de la barra de navegación */}
        </div>

        <div className="swiper review-slider">
          <div className="swiper-wrapper">
            {/* Contenido del swiper */}
            <div className="swiper-slide box">
              <FontAwesomeIcon icon={faQuoteLeft} />
              <FontAwesomeIcon icon={faQuoteRight} />
              <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/iltlvdwpu7rfjsxhs78c" alt="" />
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p>sit amet, consectetur adipisicing elit. Quo, earum quis dolorem quaerat tenetur illum.</p>
              <h3>John Doe</h3>
              <span>Satisfied Client</span>
            </div>

            <div className="swiper-slide box">
              <FontAwesomeIcon icon={faQuoteLeft} />
              <FontAwesomeIcon icon={faQuoteRight} />
              <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/ifdsxghyyadcpggqy1tm" alt="" />
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p>sit amet consectetur adipisicing elit. Rerum optio quasi ut, illo ipsam assumenda.</p>
              <h3>John Doe</h3>
              <span>Satisfied Client</span>
            </div>

            <div className="swiper-slide box">
              <FontAwesomeIcon icon={faQuoteLeft} />
              <FontAwesomeIcon icon={faQuoteRight} />
              <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/fnstz7ftrcldpbfeu57r" alt="" />
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p>sit amet consectetur adipisicing elit. Eius asperiores aliquam hic quis! Eligendi, aliquam.</p>
              <h3>John Doe</h3>
              <span>Satisfied Client</span>
            </div>

            <div className="swiper-slide box">
              <FontAwesomeIcon icon={faQuoteLeft} />
              <FontAwesomeIcon icon={faQuoteRight} />
              <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/yoc39uejzlse2uzfppxd" alt="" />
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p>sit amet consectetur adipisicing elit. Eligendi modi perspiciatis distinctio velit aliquid a.</p>
              <h3>John Doe</h3>
              <span>Satisfied Client</span>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </section>

      <section className="book" id="book">
        <h1 className="heading">Reserva <span>tu lugar Favorito</span></h1>
        <form action="" className='reserva-f'>
          <div className="search-bar1">
            <input type="text" id="search-input" placeholder="Buscar Lugar..." className="box" />
          </div>
          <input type="text" placeholder="Nombre" className="box" />
          <input type="email" placeholder="Email" className="box" />
          <input type="number" placeholder="Contacto" className="box" />
          <textarea
            name=""
            placeholder="Mensaje"
            className="box"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <input type="submit" value="Enviar" className="btn" />
        </form>
      </section>
    </>
  );
};

export default About;
