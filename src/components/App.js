import { Component } from 'react';

import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { fetchImages } from './api';
import { MagnifyingGlass } from 'react-loader-spinner';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    query: '',
    page: 1,
  };

  onSearch = async newQuery => {
    this.setState({
      isLoading: true,
      query: newQuery,
      page: 1,
      images: [],
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.fetchUpdatedImages();
      console.log('rend');
    }
  }

  fetchUpdatedImages = async () => {
    const { page, query } = this.state;

    try {
      this.setState({ isLoading: true });
      const searchedImages = await fetchImages(query, page);

      this.setState(prevState => ({
        images: [...prevState.images, ...searchedImages.hits],
        isLoading: false,
      }));
    } catch (error) {
      this.setState({ isLoading: false });
    }
  };

  onAdd = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    return (
      <div>
        <SearchBar addGalery={this.onSearch} />
        {this.state.isLoading && (
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        )}
        <ImageGallery imagesRender={this.state.images} />
        {this.state.images.length > 0 ? <Button addPage={this.onAdd} /> : null}
      </div>
    );
  }
}
