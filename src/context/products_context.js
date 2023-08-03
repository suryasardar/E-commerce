import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import { products_url as url } from "../utils/constants";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";
const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  singleproduct_loading: false,
  singleproduct_error: false,
  singleProduct: [],
};
const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
    // console.log(initialState);
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const Fetchproduct = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await axios.get(url);
      const products = response.data;
      // console.log(products);
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
      // console.log(payload);
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };
  const Fetchsingleproduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const response = await axios.get(url);
      const singlepro = response.data;
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singlepro });
    } catch {
      dispatch({
        type: GET_SINGLE_PRODUCT_ERROR,
      });
    }
  };
  // console.log(SIDEBAR_CLOSE);
  useEffect(() => {
    Fetchproduct(url);
  }, []);
  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, Fetchsingleproduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
