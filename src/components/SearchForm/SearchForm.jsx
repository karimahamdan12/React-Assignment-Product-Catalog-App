import { useState, useEffect } from "react";
import styles from "./SearchForm.module.css";
function SearchForm({ productList, setFilteredData, filteredData }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortByPrice, setsortByPrice] = useState("");
  const [filters, setFilters] = useState({
    searchTerm,
    selectedCategory,
    sortByPrice,
  });
  useEffect(() => {
    setFilters({ searchTerm, selectedCategory, sortByPrice });
  }, [sortByPrice, selectedCategory, searchTerm]);
  useEffect(() => {
    console.log({ filters });
    ApplyFilters({ filters, productList, setFilteredData, filteredData });
  }, [filters]);
  return (
    <form>
      <div className={styles.filtersFlex}>
        <div className={styles["search-bar"]}>
          <label htmlFor="search-bar">Products</label>
          <input
            id="search-bar"
            type="search"
            placeholder="search for a product"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            className={styles.searchbar}
          />
        </div>
        <div className={styles["select-wrapper"]}>
          <select
            id="category-select"
            value={selectedCategory}
            onChange={(event) => {
              setSelectedCategory(event.target.value);
            }}
            aria-label="chose the category"
            className={styles["category-select"]}
          >
            <option value="" disabled>
              --Category--
            </option>
            <option value="All">All</option>
            <option value="women's clothing">women's clothing</option>
            <option value="men's clothing">men's clothing</option>
            <option value="jewelery">jewelery</option>
            <option value="electronics">electronics</option>
          </select>

          <select
            id="sort-select"
            className={styles["sort-select"]}
            value={sortByPrice}
            onChange={(event) => {
              setsortByPrice(event.target.value);
            }}
            aria-label="sort by price"
          >
            <option value="" disabled>
              --Price--
            </option>
            <option value="Ascending">Ascending</option>
            <option value="Descending">Descending</option>
          </select>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;

function ApplyFilters({ filters, productList, setFilteredData }) {
  const { searchTerm, selectedCategory, sortByPrice } = filters;

  let newData = [...productList];
  if (searchTerm) {
    newData = newData.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  if (selectedCategory && selectedCategory !== "All") {
    newData = newData.filter(
      (product) => product.category === selectedCategory
    );
  }
  if (sortByPrice === "Ascending") {
    newData.sort((a, b) => Number(a.price) - Number(b.price));
  } else if (sortByPrice === "Descending") {
    newData.sort((a, b) => Number(b.price) - Number(a.price));
  }
  setFilteredData(newData);
}
