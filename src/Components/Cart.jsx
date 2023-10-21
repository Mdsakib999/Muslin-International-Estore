import React, { useEffect, useState } from "react";

const Cart = () => {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Calculate the total price when the cart items change
    const calculateTotalPrice = () => {
      const total = cartItems.reduce((accumulator, item) => {
        return accumulator + item.price;
      }, 0);
      setTotalPrice(total);
    };

    calculateTotalPrice();
  }, [cartItems]);


  return (
    <div>
      <h1 className="pt-20 font-bold text-3xl lg:text-5xl text-center">
        Your Shopping Cart
      </h1>
      <div className="mt-10 mb-24">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex lg:w-[60%] mx-auto bg-base-100 shadow-xl my-12"
          >
            <figure>
              <img
                className="h-[200px]  w-[100%] p-4 rounded-lg"
                src={item.image}
                alt={item.title}
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

              <div className="flex justify-between items-center gap-10 my-5">
              <p className="text-right text-2xl font-semibold">
                  $ {item.price}
                </p>
                <button className="px-4 py-2 rounded-md text-white font-semibold text-base bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 ...">
                  Remove
                </button>
                
              </div>
            </div>
          </div>
        ))}

        <hr />
        <div className="text-center mt-4 pr-6">
          <p className="text-4xl font-semibold">Total Price: $ {totalPrice.toFixed(2)}</p>
          <p className="mt-6 px-4 py-2 rounded-md text-white font-semibold text-base bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 lg:w-[20%] mx-auto">Pay</p>
        </div>

      </div>
      
    </div>
  );
};

export default Cart;
