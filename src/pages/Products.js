import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { viewProducts } from "../utils/axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [page, setPage] = useState("");
  const [limit, setLimit] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    viewProducts(name, limit, page, category)
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [limit, page, category]);

  const handleSearch = () => {
    // Panggil fungsi viewProducts dengan nilai name yang diperbarui
    viewProducts(name, limit, page, category)
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <Header />
      <div className="flex">
        <div className="ml-10 pt-12 border-r-2 h-screen border-solid border-gray-500 pr-20">
          <p>Categories</p>
        </div>
        <div className="ml-10 mt-10 w-full">
          <div className="flex">
            <div>
              <input
                type="text"
                placeholder="Cari..."
                className="border rounded p-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button
                type="submit"
                onClick={handleSearch}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Cari
              </button>
            </div>
            <div>
              <select className="border rounded p-2">
                <option value="default" disabled>
                  Urutkan berdasarkan...
                </option>
                <option value="default">None</option>
                <option value="cheapest">Cheapest</option>
                <option value="priciest">Priciest</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-16 mt-20 pr-5">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 shadow-md rounded-md h-full w-[100%]"
              >
                <h2 className="text-xl font-bold mb-2 text-center">
                  {product.name}
                </h2>
                <div className=" items-center justify-center m-auto text-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-40 w-40 m-auto justify-center items-center text-center"
                  />
                </div>
                <p className="text-lg text-gray-700 text-center">
                  {product.price}
                </p>
                <p className="text-center">{product.description}</p>
                <p className="text-center">lihat selengkapnya</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
