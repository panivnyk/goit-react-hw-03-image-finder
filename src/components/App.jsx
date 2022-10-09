import { Component } from 'react';
// import { fetchImages } from 'components/services/api.jsx';
// import {} from './App.styled';

export class App extends Component {
  state = {
    searchQuery: '',
    currentPage: 1,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.loadImages(this.state.query, this.state.page);
    }
  }

  componentDidMount() {
    fetch(
      'https://pixabay.com/api/?key=29451964-958278d8f10d2abadadf36c5e&q=cat&image_type=photo&orientation=horizontal&per_page=12&page=1'
    )
      .then(res => res.json())
      .then(console.log);
  }

  render() {
    return <div>test</div>;
  }
}
