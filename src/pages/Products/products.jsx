import React from "react";
import ProductHero from "./ProductHero/ProductHero";
import ProductsHeader from "../../components/product-header/header";
import Footer from "../Home/_components/footer/footer";

const Products = () => {
  return (
    <div>
      <ProductsHeader />
      <ProductHero />
      <Footer />
    </div>
  );
};

export default Products;
