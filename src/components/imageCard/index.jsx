import { useRef, useState } from "react";
import styles from "./styles.module.css";

const ImageCard = ({ url, alt }) => {
  const [spans, setSpans] = useState(0);
  const imageRef = useRef(null);

  const setSpansNumbers = () => {
    setSpans(Math.ceil(imageRef.current.clientHeight / 10));
  };

  return (
    <div
      className={`${styles.image_container}`}
      style={{ gridRowEnd: `span ${spans}` }}
    >
      <img src={url} alt={alt} ref={imageRef} onLoad={setSpansNumbers} />
    </div>
  );
};

export default ImageCard;
