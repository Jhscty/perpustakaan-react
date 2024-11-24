import React from 'react';
import './Tentang.css';

const Tentang = () => {
    return (
        <div className='tentang-container'>
            <section id="about" className="tentang"> 
                <h2>About Our Library</h2> 
                <p>Perpustakaan SMAN 103 JAKARTA, merupakan salah satu fasilitas sekolah agar siswa dapat dengan mudah menggali ilmu di sekolah.</p>
            </section>

            <section id="contact" className="tentang">
                <h2>Contact Us</h2>
                <ul className="contact-info">
                    <li><strong>Email:</strong> <a href="mailto:sman103jkt@gmail.com">sman103jkt@gmail.com</a></li>
                    <li><strong>Phone:</strong> (021) 8622372</li>
                    <li><strong>Address:</strong> Jl. Mawar Merah VI Perumnas Klender</li>
                </ul>
            </section>
        </div>
    );
};

export default Tentang; 