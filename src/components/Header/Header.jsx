import React, { useEffect } from 'react';
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
    useEffect(() => {
        let currentImage = 1;

        const interval = setInterval(() => {
            const images = [
                document.getElementById('header-image1'),
                document.getElementById('header-image2'),
                document.getElementById('header-image3'),
                document.getElementById('header-image4'),
                document.getElementById('header-image5')
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
        <div className='holder'>
            <header className='header'>
                <div className="background-image" id="header-image1"></div>
                <div className="background-image" id="header-image2"></div>
                <div className="background-image" id="header-image3"></div>
                <div className="background-image" id="header-image4"></div>
                <div className="background-image" id="header-image5"></div>
                <div className='header-content flex flex-c text-center text-white'>
                    <h2 className='header-title text-capitalize'>PERPUSTAKAAN SEGA</h2><br />
                    <p className='header-text fs-18 fw-3'>Disini Anda Dapat Menemukan Buku-Buku Yang Anda Cari. <br />Tidak Mungkin Buku Anda Tidak Ada Disni!</p>
                    <SearchForm />
                </div>
            </header>
        </div>
    );
}

export default Header;