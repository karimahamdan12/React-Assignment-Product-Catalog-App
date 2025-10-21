import { useState, useEffect } from "react";
import SearchForm from "../SearchForm";
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
          <SearchForm
            productList={productList}
            setFilteredData={setFilteredData}
            filteredData={filteredData}
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
