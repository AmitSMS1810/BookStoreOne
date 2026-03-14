import React from "react";
import banner from '../assets/banner.jpg';

function Banner() {
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-10">

      <div className="flex flex-col-reverse md:flex-row items-center gap-10">

        {/* LEFT SECTION */}
        <div className="w-full md:w-1/2 space-y-6">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Discover Your Next
            <span className="text-primary"> Favorite Book 📚</span>
          </h1>

          <p className="text-gray-500 text-lg">
            Explore thousands of books, courses, and learning resources.
            Improve your skills and grow your knowledge with our
            curated bookstore collection.
          </p>

          {/* Search Input */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search books..."
              className="input input-bordered w-full max-w-md"
            />
            <button className="btn btn-primary">
              Search
            </button>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="btn btn-primary">
              Get Started
            </button>
            <button className="btn btn-outline">
              Learn More
            </button>
          </div>

        </div>

        {/* RIGHT SECTION (IMAGE) */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={banner}
            alt="Books Banner"
            className="w-full max-w-md rounded-lg"
          />
        </div>

      </div>

    </div>
  );
}

export default Banner;