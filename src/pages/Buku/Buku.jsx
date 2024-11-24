import React from 'react';
import Header from '../../components/Header/Header';
import BookList from '../../components/BookList/BookList';

const Buku = () => {
    return (
        <div>
            <Header />
            <section className="library-content">

                <BookList />
            </section>
        </div>
    );
}

export default Buku;