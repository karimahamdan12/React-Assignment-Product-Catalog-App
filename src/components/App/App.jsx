import { useState, useEffect } from "react";
import FilterBar from "../FilterBar";
import SearchResult from "../SearchResult/SearchResult";
import styles from "./App.module.css";
import useFetchProducts from "../../hooks/useFetchProducts";
function App() {
  const { productList, error } = useFetchProducts();
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    setFilteredData(productList);
  }, [productList]);
  return (
    <>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <FilterBar
            productList={productList}
            setFilteredData={setFilteredData}
          />
        </header>
        <main>
          <SearchResult productList={filteredData} error={error} />
        </main>
      </div>
    </>
  );
}

export default App;
