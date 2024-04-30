import React, { useState, FC } from 'react';
import ReactPlayer, { ReactPlayerProps } from 'react-player';

// Define the component props type
interface VideoModalProps {
  playerProps: ReactPlayerProps;
}

const ReactPlayerModal: FC<VideoModalProps> = ({ playerProps }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Open Video</button>
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1000,
          background: 'rgba(0, 0, 0, 0.8)',
          padding: '40px',
          borderRadius: '8px'
        }}>
          <button onClick={closeModal} style={{
            position: 'absolute',
            right: '10px',
            top: '10px',
            fontSize: '24px',
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer'
          }}>X</button>
          <ReactPlayer {...playerProps} />
        </div>
      )}
    </div>
  );
};

export default ReactPlayerModal;
