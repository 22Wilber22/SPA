import React from 'react';
import { IoLogOut, IoSettingsSharp, IoPerson, IoPlayCircle, IoMusicalNotes } from 'react-icons/io5';
import './Home.css';

function Home() {
  return (
    //hacemo el paartador del navbar
    <div className='container'>
      <nav className='navbar'>
        <div className='logo'>
          <h2>Mi Música</h2>
        </div>
        <ul>
          <li><a href='#'><IoPerson /> Perfil</a></li>
          <li><a href='#'><IoSettingsSharp /> Configuración</a></li>
          <li><a href='/login'><IoLogOut /> Cerrar Sesión</a></li>
        </ul>
      </nav>
{      /** Agregamos laparte d el playlist, donde se ve como que essta sonaod algo
       */}
      <main className='main'>
        <section className='playlist-section'>
          <h1 className='titulo'>Playlist en reproducción</h1>
          <div className='playlist-card'>
            <div className='playlist-info'>
              <IoPlayCircle className='play-icon' />
              <h3>Solo para mi</h3>
              <p>15 canciones • 45 min</p>
            </div>
          </div>
        </section>


        {      /** AHORA ARTISTAS Y LAS RECOMENDACION
       */}
        <section className='artists-recommendations-section'>
          <h1 className='titulo'>Artistas y Recomendaciones</h1>
          <div className='content-grid'>
            <div className='artists'>
              <h2>Artistas Populares</h2>
              <div className='artist-card'>
                <div className='artist-image'></div>
                <p>Michael Jackson</p>
              </div>
              <div className='artist-card'>
                <div className='artist-image'></div>
                <p>Bruno Mars</p>
              </div>
              <div className='artist-card'>
                <div className='artist-image'></div>
                <p>Aurora</p>
              </div>
            </div>

            <div className='recommendations'>
              <h2>Para Ti</h2>
              <div className='recommendation-card'>
                <IoMusicalNotes />
                <p>Mix rock</p>
              </div>
              <div className='recommendation-card'>
                <IoMusicalNotes />
                <p>Música lofi</p>
              </div>
              <div className='recommendation-card'>
                <IoMusicalNotes />
                <p>Música reciente</p>
              </div>
            </div>
          </div>
        </section>


        {      /** Albumnes
       */}
        <section className='albums-section'>
          <h1 className='titulo'>Álbumes</h1>
          <div className='albums-grid'>
            <div className='album-card'>
              <div className='album-image'></div>
              <p>Mi album</p>
            </div>
            <div className='album-card'>
              <div className='album-image'></div>
              <p>Album 2</p>
            </div>
            <div className='album-card'>
              <div className='album-image'></div>
              <p>Álbum 3</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;