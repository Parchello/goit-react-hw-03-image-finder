import { Component } from 'react';

import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { fetchImages } from './api';

export class App extends Component {
  state = {
    images: [],
  };

  async componentDidMount() {
    try {
      const initialImages = await fetchImages();

      this.setState({ images: initialImages.hits });
    } catch (error) {
    } finally {
      console.log(this.state.images);
    }
  }
  render() {
    return (
      <div>
        <SearchBar />
        <ImageGallery imagesRender={this.state.images} />
        <Button />
      </div>
    );
  }
}
