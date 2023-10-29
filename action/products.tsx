export const getProducts = () => {
  return fetch("https://dummyjson.com/products").then((res) => res.json());
};
