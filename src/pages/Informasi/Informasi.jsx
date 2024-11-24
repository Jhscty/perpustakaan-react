import React, { useState } from 'react';
import './Informasi.css';

const Informasi = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalDescription, setModalDescription] = useState('');

    const openModal = (title, description) => {
        setModalTitle(title);
        setModalDescription(description);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <section className="facilities">
            <h2>Our Facilities</h2>
            <div className="facility-container">
                <div className="facility-box" onClick={() => openModal('Facility 1', 'Description of Facility 1.')}>
                    <h3>Facility 1</h3>
                </div>
                <div className="facility-box" onClick={() => openModal('Facility 2', 'Description of Facility 2.')}>
                    <h3>Facility 2</h3>
                </div>
                <div className="facility-box" onClick={() => openModal('Facility 3', 'Description of Facility 3.')}>
                    <h3>Facility 3</h3>
                </div>
                <div className="facility-box" onClick={() => openModal('Facility 4', 'Description of Facility 4.')}>
                    <h3>Facility 4</h3>
                </div>
            </div>

            {/* Modal */}
            {modalVisible && (
                <div id="modal" className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2 id="modal-title">{modalTitle}</h2>
                        <p id="modal-description">{modalDescription}</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Informasi;