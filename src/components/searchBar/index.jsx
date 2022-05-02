import styles from "./styles.module.css";

const SearchBar = () => {
  return (
    <>
      <form className={`${styles.searchGroup}`} role="search">
        <label className={`${styles.searchLabel}`} for="search">
          Search for stuff
        </label>
        <input
          className={`${styles.searchInput}`}
          id="search"
          type="search"
          placeholder="Hit any word in your mind..."
          autofocus
          required
          autoComplete="Off"
        />
        <button className={`${styles.searchBtn}`} type="submit">
          Go
        </button>
      </form>
    </>
  );
};

export default SearchBar;
