import axios from "axios";

export const viewProducts = (name, limit, page, category) => {
  const url = `http://localhost:8080/products?search=${name}&limit=${limit}&page=${page}&category=${category}`;
  return axios.get(url);
};

export const viewCategory = () => {
  const url = `http://localhost:8080/products/slash`;
  return axios.get(url);
};
