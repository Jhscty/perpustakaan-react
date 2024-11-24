import React from 'react';
import './Pustakawan.css';

// Import gambar
import suparini from '../../images/suparini.jpg';
import efriani from '../../images/efriani.png';
import ai from '../../images/ai.jpg';

const Pustakawan = () => {
    return (
        <div className='pustakawan-container'>
            <section id="organization-structure" className="section">
                <h2>Organizational Structure</h2>
                <div className="org-chart">
                    {/* Top Level (Principal) */}
                    <div className="org-level">
                        <div className="org-box">
                            <img src={suparini} alt="Kepala Sekolah" />
                            <h3>Principal</h3>
                            <p>Suparini, M.Pd</p>
                        </div>
                    </div>

                    {/* Mid Level (Library Head) */}
                    <div className="org-level">
                        <div className="org-box">
                            <img src={efriani} alt="Kepala Perpustakaan" />
                            <h3>Head of Library</h3>
                            <p>(Nama)</p>
                        </div>
                    </div>

                    {/* Lower Level Staff */}
                    <div className="org-level">
                        <div className="org-box">
                            <img src={ai} alt="Technical Services" />
                            <h3>Technical Services</h3>
                            <p>(Nama)</p>
                        </div>
                        <div className="org-box">
                            <img src={ai} alt="User  Services" />
                            <h3>User Services</h3>
                            <p>(Nama)</p>
                        </div>
                        <div className="org-box">
                            <img src={ai} alt="IT Services" />
                            <h3>IT Services</h3>
                            <p>(Nama)</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="our-staff" className="section">
                <h2>Our Staff</h2>
                <div className="staff-container">
                    <div className="staff-card">
                        <h4>Chamdi Fajar, S.IP</h4>
                        <p>Head of Library</p>
                    </div>
                    <div className="staff-card">
                        <h4>Sri Mujaidah</h4>
                        <p>Technical Services</p>
                    </div>
                    <div className="staff-card">
                        <h4>Wakidatul Romlah, S.Pd</h4>
                        <p>User Services</p>
                    </div>
                    <div className="staff-card">
                        <h4>Wasis Tri Atmojo, S.Kom</h4>
                        <p>IT Services</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pustakawan;