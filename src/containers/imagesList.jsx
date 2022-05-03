const ImagesList = ({ images }) => {
  const elements = images.map(({ id, urls, description }) => {
    return <img key={id} src={urls.regular} alt={description} />;
  });

  return <div>{elements}</div>;
};

export default ImagesList;
