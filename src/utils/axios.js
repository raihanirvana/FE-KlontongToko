import axios from "axios";

export const viewProducts = (name, limit, page, category) => {
  const url = `http://localhost:8080/products?search=${name}&limit=${limit}&page=${page}&category=${category}`;
  return axios.get(url);
};
