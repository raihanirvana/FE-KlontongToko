import React from "react";

const Header = () => {
  return (
    <div className="h-20 bg-green-400 ">
      <div className="flex justify-between pt-8 pl-10 pr-10">
        <div className="">
          <p className="">Toko Kelontong Pak X</p>
        </div>
        <div className="flex gap-10">
          <p>Home</p>
          <p>Products</p>
          <p>Add Products</p>
        </div>
        <div className="flex gap-10">
          <p>Masuk</p>
          <p>Buat Akun</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
