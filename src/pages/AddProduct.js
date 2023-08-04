import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
const InputProduct = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [sku, setSku] = useState("");
  const [categoryid, setCategoryid] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [length, setLength] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [preview, setPreview] = useState("");

  const onFileInput = (e) => {
    setImage(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("image", image);
    formDataToSend.append("name", name);
    formDataToSend.append("sku", sku);
    formDataToSend.append("categoryid", categoryid);
    formDataToSend.append("description", description);
    formDataToSend.append("price", price);
    formDataToSend.append("length", length);
    formDataToSend.append("weight", weight);
    formDataToSend.append("height", height);

    const url = "http://localhost:8080/products";
    try {
      const result = await axios.post(url, formDataToSend);
      if (result.status === 200) {
        console.log("Data produk berhasil dikirim:", result.data);
      } else {
        console.error("Gagal mengirim data produk:", result.statusText);
      }
    } catch (error) {
      console.error("Gagal mengirim data produk:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-md mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">Input Product</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="h-full">
            <p>Image Preview</p>
            <img src={preview} alt="test" />
          </div>
          <div>
            <label htmlFor="image" className="block mb-1 font-medium">
              Image
            </label>
            <input
              type="file"
              id="image"
              onChange={onFileInput}
              className="border rounded-lg p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="productName" className="block mb-1 font-medium">
              Product Name
            </label>
            <input
              type="text"
              id="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded-lg p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="sku" className="block mb-1 font-medium">
              SKU
            </label>
            <input
              type="text"
              id="sku"
              value={sku}
              onChange={(e) => setSku(e.target.value)}
              className="border rounded-lg p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="categoryid" className="block mb-1 font-medium">
              Option Category
            </label>
            <select
              id="categoryid"
              value={categoryid}
              onChange={(e) => setCategoryid(e.target.value)}
              className="border rounded-lg p-2 w-full"
            >
              <option value="">Select category</option>
              <option value="1">Category 1</option>
              <option value="2">Category 2</option>
              <option value="3">Category 3</option>
              <option value="4">Category 4</option>
              <option value="5">Category 5</option>
            </select>
          </div>
          <div>
            <label htmlFor="description" className="block mb-1 font-medium">
              Description Product
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border rounded-lg p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="price" className="block mb-1 font-medium">
              Product Price
            </label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border rounded-lg p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="length" className="block mb-1 font-medium">
              Product Length
            </label>
            <input
              type="number"
              id="length"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="border rounded-lg p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="weight" className="block mb-1 font-medium">
              Product Weight
            </label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="border rounded-lg p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="height" className="block mb-1 font-medium">
              Product height
            </label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="border rounded-lg p-2 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default InputProduct;
