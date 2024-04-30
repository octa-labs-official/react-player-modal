import React, { useState, FC } from 'react';
import ReactPlayer, { ReactPlayerProps } from 'react-player';

interface ModalStyleProps {
  background?: string;
  padding?: string;
  borderRadius?: string;
  buttonColor?: string;
}

interface VideoModalProps extends ReactPlayerProps {
  modalStyle?: ModalStyleProps;
}

const ReactPlayerModal: FC<VideoModalProps> = ({ modalStyle, ...playerProps }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Default styles that can be overridden by props
  const defaultModalStyle: React.CSSProperties = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000,
    background: modalStyle?.background || 'rgba(0, 0, 0, 0.8)',
    padding: modalStyle?.padding || '40px',
    borderRadius: modalStyle?.borderRadius || '8px',
  };

  return (
    <div>
      <button onClick={openModal}>Open Video</button>
      {isOpen && (
        <div style={defaultModalStyle}>
          <button onClick={closeModal} style={{
            position: 'absolute',
            right: '10px',
            top: '10px',
            fontSize: '24px',
            background: 'none',
            border: 'none',
            color: modalStyle?.buttonColor || 'white',
            cursor: 'pointer'
          }}>X</button>
          <ReactPlayer {...playerProps} />
        </div>
      )}
    </div>
  );
};

export default ReactPlayerModal;
