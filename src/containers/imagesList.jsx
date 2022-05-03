import ImageCard from "../components/imageCard";
import styles from "./styles.module.css";

const ImagesList = ({ images }) => {
  const elements = images.map(({ id, urls, description }) => {
    return <ImageCard key={id} url={urls.regular} alt={description} />;
  });

  return <div className={`${styles.image_list}`}>{elements}</div>;
};

export default ImagesList;
