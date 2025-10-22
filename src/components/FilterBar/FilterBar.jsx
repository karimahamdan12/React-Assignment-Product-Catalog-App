import { useState, useEffect } from "react";
import styles from "./FilterBar.module.css";
import SelectDropDown from "../SelectDropDown";
import { CATEGORIES, SORT_OPTIONS } from "../../constants/ProductCard";
function FilterBar({ productList, setFilteredData }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortByPrice, setsortByPrice] = useState("");
  useEffect(() => {
    ApplyFilters({
      filters: { searchTerm, selectedCategory, sortByPrice },
      productList,
      setFilteredData,
    });
  }, [searchTerm, selectedCategory, sortByPrice, productList]);

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
          <SelectDropDown
            id="category-select"
            value={selectedCategory}
            onChange={(event) => {
              setSelectedCategory(event.target.value);
            }}
            aria-label="chose a category"
            className={styles["category-select"]}
            placeHolder="--Category--"
            options={CATEGORIES}
          />
          <SelectDropDown
            id="sort-select"
            className={styles["sort-select"]}
            value={sortByPrice}
            onChange={(event) => {
              setsortByPrice(event.target.value);
            }}
            aria-label="sort by price"
            placeHolder="--Price--"
            options={SORT_OPTIONS}
          />
        </div>
      </div>
    </form>
  );
}

export default FilterBar;

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
