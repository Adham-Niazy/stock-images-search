import { useState } from "react";
import styles from "./styles.module.css";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <form
        className={`${styles.searchGroup}`}
        role="search"
        onSubmit={(e) => onSearch(e, searchTerm)}
      >
        <label className={`${styles.searchLabel}`} htmlFor="search">
          Search for stuff
        </label>
        <input
          value={searchTerm}
          className={`${styles.searchInput}`}
          id="search"
          type="search"
          placeholder="Hit any word in your mind..."
          autoFocus
          required
          autoComplete="Off"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className={`${styles.searchBtn}`} type="submit">
          Go
        </button>
      </form>
    </>
  );
};

export default SearchBar;
