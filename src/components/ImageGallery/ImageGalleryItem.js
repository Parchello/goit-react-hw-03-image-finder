export const ImageGalleryItem = ({ imagesRender }) => {
  return (
    <div>
      {imagesRender.map(image => (
        <li key={image.id}>
          <img src={image.webformatURL} alt={`Nothing here for now =(`} />
        </li>
      ))}
    </div>
  );
};
