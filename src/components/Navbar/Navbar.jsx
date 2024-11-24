import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../images/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleNavbar = () => setToggleMenu(!toggleMenu);
  const closeMenu = () => setToggleMenu(false);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      nav.classList.toggle("sticky", window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1296) {
        setToggleMenu(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <Link to="/" className="logo">
        <img src={logoImg} alt="Perpustakaan SEGA Logo" />
        Perpustakaan SEGA
      </Link>
      <ul className={toggleMenu ? "open" : ""}>
        <li><Link to="/" onClick={closeMenu}>Beranda</Link></li>
        <li><Link to="/buku" onClick={closeMenu}>Buku</Link></li>
        <li><Link to="/informasi" onClick={closeMenu}>Informasi</Link></li>
        <li><Link to="/pustakawan" onClick={closeMenu}>Pustakawan</Link></li>
        <li><Link to="/tentang" onClick={closeMenu}>Tentang</Link></li>
      </ul>
      <div className="bars-btn" onClick={handleNavbar}>
        <HiOutlineMenuAlt3 size={35} />
      </div>
      <div className={`dropdown-menu ${toggleMenu ? "open" : ""}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Beranda</Link></li>
          <li><Link to="/buku" onClick={closeMenu}>Buku</Link></li>
          <li><Link to="/informasi" onClick={closeMenu}>Informasi</Link></li>
          <li><Link to="/pustakawan" onClick={closeMenu}>Pustakawan</Link></li>
          <li><Link to="/tentang" onClick={closeMenu}>Tentang</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;