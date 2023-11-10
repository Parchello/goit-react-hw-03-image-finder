export const ImageGallery = ({ imagesRender }) => {
  return (
    <div>
      <ul>
        {imagesRender.map(image => (
          <li key={image.id}>
            <img src={image.webformatURL} alt={`Preview of ${image.tags}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};
