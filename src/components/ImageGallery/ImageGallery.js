import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ imagesRender }) => {
  return (
    <div>
      <ul>
        <ImageGalleryItem imagesRender={imagesRender} />
      </ul>
    </div>
  );
};
