import PropTypes from 'prop-types';

import { Overlay, ModalDiv } from 'services/Common.styled';

export const Modal = ({ tags, largeImageURL, onBackdropClick }) => {
  return (
    <Overlay onClick={onBackdropClick}>
      <ModalDiv>
        <img src={largeImageURL} alt={tags} />
      </ModalDiv>
    </Overlay>
  );
};

Modal.propTypes = {
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onBackdropClick: PropTypes.func.isRequired,
};
