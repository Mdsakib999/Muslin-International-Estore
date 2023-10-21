import React from 'react';
import Items from './Items';

const Home = () => {
    return (
        <div>
            <div className="lg:w-[80%] mx-auto text-center p-10 pt-32">
          <h1 className="text-4xl lg:text-6xl font-semibold mb-4 leading-tight">
            Welcome to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 font-bold ">
               Muslin E-Store, 
            </span>
            The Reliable Shop In The Town!!!
          </h1>
          <p className="text-2xl lg:text-4xl mt-10 mb-10"> Discover the Perfect Things & Shop Now!!</p>
          <p className="text-slate-500 hover:text-black">
            "Welcome to the Ultimate Emporium! Unleash Boundless
            Excitement with Our Spectacular Collection of Marvels.
            Explore, Play, and Bring Home Your Perfect Mechanical Companion!"
          </p>
        </div>

        <Items></Items>
        </div>
    );
};

export default Home;