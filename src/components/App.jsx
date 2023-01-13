import { Component } from 'react'
import { getData } from 'services/pixabay-API';

import Searchbar from 'components/Searchbar/Searchbar'
import Loader from 'components/Loader/Loader';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

export class App extends Component {
  state = {
    query: '',
    hits: [],
    page: 1,
    loading: false,
    totalHits: 0,
    imageToEnlarge: null,
    showModal: false,
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ loading: true });
        const { query, page } = this.state;
        const { hits, totalHits } = await getData(query, page);
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          totalHits: totalHits,
          loading: false,
        }));
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleSubmit = query => {
    this.setState({
      query,
      hits: [],
      page: 1,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  handleEnlargeImage = imageURL => {
    this.setState({ showModal: true, imageToEnlarge: imageURL });
  };

  handleCloseModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }))
  }; 

  render() {
    const { loading, hits, totalHits, imageToEnlarge, showModal } = this.state;
    return (
      <>
          <Searchbar handleSubmit={this.handleSubmit} />
          {loading && (
            <Loader isLoading={loading} />
            )}
          {hits.length > 0 && (
            <ImageGallery handleEnlargeImage={this.handleEnlargeImage} hits={hits} />
            )}
          {totalHits !== hits.length && (
            <Button loadMore={this.handleLoadMore} />
            )}
          {showModal && (
            <Modal imageToEnlarge={imageToEnlarge} handleCloseModal={this.handleCloseModal} />
            )}
      </>
    );
  }
}

