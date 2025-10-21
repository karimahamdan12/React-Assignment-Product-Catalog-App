import Product from "../Product";
import styles from "./SearchResult.module.css";

function SearchResult({ productList, error }) {
  if (error) {
    return <div class={styles.error}>{error}</div>;
  }
  return (
    <>
      <div class={styles["products-grid"]}>
        {productList?.map((product) => (
          <Product item={product} key={product.id} />
        ))}
        {error && <p>{error}</p>}
      </div>
    </>
  );
}

export default SearchResult;
