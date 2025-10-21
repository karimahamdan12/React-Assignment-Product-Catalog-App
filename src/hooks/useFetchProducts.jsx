import { useState, useEffect } from "react";

export default function useProducts() {
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error("Something went wrong...");
        const data = await response.json();
        setProductList(data);
      } catch (e) {
        console.error(e);
        setError("Oh! Something went wrong...");
      }
    };
    fetchProducts();
  }, []);

  return { productList, error, setProductList };
}
