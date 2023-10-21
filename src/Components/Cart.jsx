import React from 'react';

const Cart = () => {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  return (
    <div >
      <h1 className="pt-20 font-bold text-3xl lg:text-6xl text-center">Your Shopping Cart</h1>
      <div className="grid lg:grid-cols-4 gap-5 mx-auto mt-10 mb-24">
        {cartItems.map((item) => (
          <div key={item.id} className="card card-compact lg:w-80 bg-base-100 shadow-xl my-12">
            <figure>
              <img
                className="h-[300px] w-[100%] p-4 rounded-lg"
                src={item.image}
                alt={item.title}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Name: {item.title}</h2>
              <div className="flex justify-between font-bold">
                <p className="text-blue-600">Category: {item.category}</p>
                <p><i className="fa-solid fa-star text-yellow-300"></i> {item.rating.rate}</p>
              </div>
              <p className='h-[58px] overflow-hidden text-ellipsis'>{item.description}</p>
              <div className="flex justify-between items-center gap-10 my-5">
                <button
                  className="px-4 py-2 rounded-md text-white font-semibold text-base bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 ..."
                >
                  Remove
                </button>
                <p className="text-right text-2xl font-semibold">$ {item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;