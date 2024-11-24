import React, { useEffect } from 'react';
import './Beranda.css';

const Beranda = () => {
    useEffect(() => {
        let currentImage = 1;

        const interval = setInterval(() => {
            const images = [
                document.getElementById('image1'),
                document.getElementById('image2'),
                document.getElementById('image3'),
                document.getElementById('image4'),
                document.getElementById('image5')
            ];

            images.forEach((image, index) => {
                if (index + 1 === currentImage) {
                    image.style.opacity = 1; 
                } else {
                    image.style.opacity = 0;
                }
            });

            currentImage = currentImage < images.length ? currentImage + 1 : 1;
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <section className="banner">
                <div className="background-image" id="image1"></div>
                <div className="background-image" id="image2"></div>
                <div className="background-image" id="image3"></div>
                <div className="background-image" id="image4"></div>
                <div className="background-image" id="image5"></div>
                <div className="banner-content">
                    <h1>Selamat datang di <br /> <span>PERPUSTAKAAN SEGA</span></h1>
                    <h2>Jelajahi kekayaan pengetahuan dan sumber daya di Perpustakaan SMAN 103 Jakarta.</h2>
                </div>
            </section>

            <section className="map">
                <h1>LOKASI</h1>
                <div className="map-container">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.323663634313!2d106.9338421108157!3d-6.220982360903745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d15434fa03f%3A0xdf01a43c003342ce!2sSMA%20Negeri%20103%20Jakarta!5e0!3m2!1sen!2sid!4v1731451367763!5m2!1sen!2sid" 
                        width="600" 
                        height="450" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                    <div className="map-content">
                        <h2>Pepustakaan SMAN 103 Jakarta</h2>
                        <h5>Perumnas Klender, Jl. Mawar Merah VI, Malaka Jaya, Kec. Duren Sawit, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13460</h5>
                        <p>
                            <i className="fa-solid fa-phone"></i>
                            <span>021-8622372</span>
                        </p>
                        <p>
                            <i className="fa-solid fa-envelope"></i>
                            <span><a href="mailto:https://sman103jakarta.sch.id/">admin@sma103jakarta.sch.id</a></span>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Beranda;