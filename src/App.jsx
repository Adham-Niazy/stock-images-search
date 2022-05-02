import { useState } from "react";
import unsplashConfigInstance from "./axios/unsplash";
import SearchBar from "./components/searchBar";
import "./index.css";

const App = () => {
  const [imagesList, setImagesList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalImages, setTotalImages] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const handleSearch = async (e, term) => {
    e.preventDefault();
    const response = await unsplashConfigInstance.get("/search/photos", {
      params: {
        query: term,
      },
    });

    setImagesList(response.data.results);
    setTotalImages(response.data.total);
    setTotalPages(response.data.total_pages);
  };

  return (
    <div style={{ padding: "1px" }}>
      <SearchBar onSearch={handleSearch} />

      {totalImages !== 0 && (
        <>
          <span>
            Page {currentPage} out of {totalPages}
          </span>
        </>
      )}
    </div>
  );
};

export default App;
