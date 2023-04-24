import React from "react";

import CCM from "./CCM";
import Phonepub from "./Phonepub";
import Navbar from "../Navbar";
import Section1 from "./Section1";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Section5 from "./section5";
import Filters from "./Filters";

const Home = () => {
  return (
    <>
      <na>
        <Navbar />
      </na>
      <Section1 />
      <Phonepub />
      <CCM />
      <Filters />
      <Section5 />
      <Footer />
    </>
  );
};

export default Home;
