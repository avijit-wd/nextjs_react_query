"use client";

import { getProducts } from "@/action/products";
import { useQuery } from "@tanstack/react-query";

const Product = () => {
  const { data, error, isFetched } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  return <div>{data.products[0].title}</div>;
};

export default Product;
