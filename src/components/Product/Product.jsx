import { useState } from "react";
import styles from "./Product.module.css";
import { Star, Heart } from "react-feather";
import {
  MAX_TITLE_CHARACTERS,
  MAX_DESCRIPTION_CHARACTERS,
  CATEGORY_INFOS_MAPPING,
} from "../../constants/ProductCard";

function Product({ item }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const categoryBackgroundColor =
    CATEGORY_INFOS_MAPPING[item.category]?.bgColor || "white";
  const categoryTextColor =
    CATEGORY_INFOS_MAPPING[item.category]?.textColor || "black";
  const addToFavorites = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.product}>
      <a href="#" className={styles["product-link"]}>
        <img src={item.image} alt="Product image" loading="lazy" />
        <h3>
          {item.title.length > MAX_TITLE_CHARACTERS
            ? item.title.slice(0, MAX_TITLE_CHARACTERS) + "..."
            : item.title}
        </h3>
        <p className={styles.product_description}>
          {item.description.length > MAX_DESCRIPTION_CHARACTERS
            ? item.description.slice(0, MAX_DESCRIPTION_CHARACTERS) + "..."
            : item.description}
        </p>
        <div className={styles["product-summary"]}>
          <span className={styles["product-rating"]}>
            {item.rating.rate}
            <Star fill="gold" strokeWidth={1.5} size={20} /> (
            {item.rating.count})
          </span>
          <span className={styles["product-price"]}>${item.price}</span>
        </div>
      </a>

      <button
        className={styles["favorite-toggle"]}
        aria-label="Add to favorites"
        onClick={addToFavorites}
      >
        <Heart stroke={isFavorite ? "#E63963" : "black"} />
      </button>
      <span
        className={styles["product-category"]}
        style={{
          backgroundColor: categoryBackgroundColor,
          color: categoryTextColor,
        }}
      >
        {CATEGORY_INFOS_MAPPING[item.category].icon}
      </span>
    </div>
  );
}

export default Product;
