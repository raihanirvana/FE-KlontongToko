import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { viewProducts, viewCategory } from "../utils/axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [meta, setMeta] = useState([]);
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    viewProducts(name, 10, page, category)
      .then((response) => {
        setProducts(response.data.data);
        setMeta(response.data.meta);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [page, category]);

  useEffect(() => {
    viewCategory()
      .then((response) => {
        setCategory(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSearch = () => {
    // Panggil fungsi viewProducts dengan nilai name yang diperbarui
    viewProducts(name, 10, page, category)
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
      <div className="flex pb-10">
        <div className="ml-10 pt-12 h-screen pr-20">
          <p className="text-center mb-10">Categories</p>
          {category.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.categoryname)}
              className={`${
                selectedCategory === category.categoryname
                  ? "bg-blue-500"
                  : "bg-gray-300"
              } text-white px-4 py-2 rounded flex text-left mb-4 w-40`}
            >
              {category.categoryname}
            </button>
          ))}
        </div>
        <div className="pl-10 pt-10 w-full border-l-2 border-solid border-gray-500">
          <div className="flex justify-between">
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
            <div className="flex pr-5">
              <button
                onClick={() => {
                  if (page === meta.totalPage) {
                    return;
                  }
                  setPage(page + 1);
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Next
              </button>
              <p className="text-4xl">{page}</p>
              <p className="text-4xl">/</p>
              <p className="text-4xl">{meta.totalPage}</p>
              <button
                onClick={() => {
                  if (page < 2) return;
                  setPage(page - 1);
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Prev
              </button>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-16 mt-20 pr-5">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 shadow-md rounded-md h-full w-[100%]"
              >
                <h2 className="text-xl h-8 font-bold mb-2 text-center">
                  {product.name}
                </h2>
                <div className=" items-center justify-center m-auto text-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[200px] w-[300px] m-auto justify-center items-center text-center"
                  />
                </div>
                <p className="text-lg h-8 text-gray-700 text-center">
                  {product.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
                <button className="flex m-auto">Lihat selengkapnya</button>
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
