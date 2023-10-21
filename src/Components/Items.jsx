import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Items = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const addToCart = (item) => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.push(item);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    location.reload();
  };

  return (
    <div>
      <h1 className="font-bold text-6xl text-center mt-6">Our Products</h1>
      <p className="text-center my-6">
        It's time to make your Shopping. Explore thousands of Products
        with all the information you need.
      </p>

      <div className=" category-buttons text-center">
        <button
          className=" ml-3 px-4 py-2 rounded-md text-white font-semibold text-base bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 mr-5"
          onClick={() => setSelectedCategory(null)}
        >
          All
        </button>
        <button
          className=" ml-3 px-4 py-2 rounded-md text-white font-semibold text-base bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 mr-5"
          onClick={() => setSelectedCategory("men's clothing")}
        >
          Men's Clothing
        </button>
        <button
          className=" ml-3 px-4 py-2 rounded-md text-white font-semibold text-base bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 mr-5"
          onClick={() => setSelectedCategory("jewelery")}
        >
          Jewelry
        </button>
        <button
          className="mt-5 lg:mt-0 ml-3 px-4 py-2 rounded-md text-white font-semibold text-base bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 mr-5"
          onClick={() => setSelectedCategory("electronics")}
        >
          Electronics
        </button>
        <button
          className=" ml-3 px-4 py-2 rounded-md text-white font-semibold text-base bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 mr-5"
          onClick={() => setSelectedCategory("women's clothing")}
        >
          Women's Clothing
        </button>
      </div>

      <div className="grid lg:grid-cols-4 gap-5 mx-auto mt-10 mb-24">
        {items
          .filter(
            (item) => !selectedCategory || item.category === selectedCategory
          )
          .map((item) => (
            <div
              key={item.id}
              className="card card-compact lg:w-80 bg-base-100 shadow-xl hover:shadow-2xl my-12"
            >
              <figure>
                <img
                  className="h-[300px] w-[100%] p-4 rounded-lg"
                  src={item.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Name: {item.title}</h2>
                <div className="flex justify-between font-bold">
                  <p className="text-blue-600">Category: {item.category}</p>
                  <p>
                    <i className="fa-solid fa-star text-yellow-300"></i>{" "}
                    {item.rating.rate}
                  </p>
                </div>
                <p className="h-[58px] overflow-hidden text-ellipsis">
                  {item.description}
                </p>
                <div className="flex justify-between items-center gap-10 my-5">
                <button
                      onClick={() => addToCart(item)}
                      className="px-4 py-2 rounded-md text-white font-semibold text-base bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 ..."
                    >
                      Add To Cart
                    </button>
                  <p className="text-right text-2xl font-semibold">
                    $ {item.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Items;

<button
  onClick={() => addToCart(item)}
  className="px-4 py-2 rounded-md text-white font-semibold text-base bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 ..."
>
  Add To Cart
</button>;
