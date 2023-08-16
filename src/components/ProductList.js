import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();
  if (products.length < 1) {
    return <h4 style={{ transform: "none" }}>sorry no products available</h4>;
  }
  if (grid_view === false) {
    return <ListView product={products} />;
  }

  return <GridView product={products}>product list</GridView>;
};

export default ProductList;
