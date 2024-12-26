import React, { useState } from 'react';
import './achievement.css';
import SolidEdgeCertification from '../../assets/Manali Khedekar Solid Edge Certification.pdf';

const Achievement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [isPDF, setIsPDF] = useState(false);

  const openModal = (contentSrc, isPDFFile = false) => {
    setModalContent(contentSrc);
    setIsPDF(isPDFFile);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent('');
    setIsPDF(false);
  };

  return (
    <div className="achievements" id="achievement">
      <h1 className="achievements-title">My Achievements</h1>
      <div className="achievements-container">
        {/* Achievement 1 */}
        <div
          className="achievement-card"
          onClick={() => openModal(SolidEdgeCertification, true)}
        >
          <div className="achievement-info">
            <h2 className="achievement-name">
              Solid Edge Certification from Basic to Advance
            </h2>
            <p className="achievement-description">
              Completed certification in Solid Edge 3D Modeling and AutoCAD software.
            </p>
          </div>
        </div>

        {/* Achievement 2 */}
        <div
          className="achievement-card"
          onClick={() => openModal('path-to-certificate-image2.jpg')}
        >
          <div className="achievement-info">
            <h2 className="achievement-name">
              Basics of Electrical and Mechanical Certification
            </h2>
            <p className="achievement-description">
              Completed Basics of Electrical and Mechanical Certification under the SSP program.
            </p>
          </div>
        </div>

        {/* Achievement 3 */}
        <div
          className="achievement-card"
          onClick={() => openModal('path-to-certificate-image3.jpg')}
        >
          <div className="achievement-info">
            <h2 className="achievement-name">
              Basic and Advanced Mechatronics Certification
            </h2>
            <p className="achievement-description">
              Completed Basic and Advanced Mechatronics Training under the SSP program.
            </p>
          </div>
        </div>
      </div>

      {/* Full-Screen Modal */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            {isPDF ? (
              <iframe
                src={modalContent}
                title="Certificate PDF"
                className="modal-fullscreen"
              />
            ) : (
              <p>{modalContent}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Achievement;
