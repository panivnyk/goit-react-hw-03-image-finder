import { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';

import {
  ImageGalleryItemLi,
  ImageGalleryItemImage,
} from 'services/Common.styled';

export class ImageGalleryItem extends Component {
  state = {
    modalOpen: false,
  };
  toggleModal = () => {
    this.setState(({ modalOpen }) => ({ modalOpen: !modalOpen }));
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onEscapeClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscapeClick);
  }

  onEscapeClick = e => {
    if (this.state.modalOpen) {
      if (e.code === 'Escape') {
        this.toggleModal();
      }
    }
  };

  handleBackdropClick = event => {
    if (this.state.modalOpen) {
      if (event.currentTarget === event.target) {
        this.toggleModal();
      }
    }
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props;
    const { modalOpen } = this.state;

    return (
      <ImageGalleryItemLi>
        <ImageGalleryItemImage
          src={webformatURL}
          alt={tags}
          onClick={this.toggleModal}
        />
        {modalOpen && (
          <Modal
            largeImageURL={largeImageURL}
            tags={tags}
            onBackdropClick={this.handleBackdropClick}
          />
        )}
      </ImageGalleryItemLi>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
