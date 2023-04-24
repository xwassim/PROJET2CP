import React from "react";
import Navbar from "../Navbar";
import Searchbar from "./Searchbar";
import CrecheSlider1 from "./CrecheSlider1";

const Search = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Searchbar />
        <CrecheSlider1 />
        <CrecheSlider1 />
      </div>
    </>
  );
};

export default Search;
