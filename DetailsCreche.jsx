import React from "react";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import Navbar from "../../Navbar";
import HeaderDescription from "./HeaderDescription";
import AvisCreche from "./AvisCreche";
import DescriptionCreche from "./DescriptionCreche";
import FixedButton from "../../Functions/FixedButton";
import Footer from "../../HomePage/Footer";
import CrecheSlider1 from "../CrecheSlider1";
import Accordion2 from "../../Demande/Reservation/steps/Accordion2";

import { FaCalendarAlt } from "react-icons/fa";

export default function DetailsCreche() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div>
        <HeaderDescription />
      </div>
      <h2 className=" mt-10 text-center text-2xl font-bold font-[Inter]  tracking-tight text-blue-950 sm:text-3xl">
              Consulter les details concernant cette creche
            </h2>
            <a><div className="fixed bottom-5 right-5 z-50 ring-4 ring-[#ff706e] rounded-xl flex justify-evenly bg-[#ffad9e] py-4 px-10 hover:cursor-pointer<">
         
           <FaCalendarAlt className="mt-1 mr-1"/>
           <span> Envoyer une demande</span>  
            </div></a>
            {/* <FixedButton/> */}
      <div className="ring-4 rounded-xl ring-[#fc8280] mx-[10%] my-10 bg-rose-100 p-5">
        <div className="flex flex-col text-center">
          {/* IL FAUT REGLER LE DISPLAY DE CETTE PARTIE INSTED OF MX-[350PX] */}
          <h1 className="text-3xl mt-5">Creche XXXXXXXXX</h1>
          <div className="  ">
            <CrecheSlider1 />
          </div>
          <h2 className="text-3xl font-bold font-[Inter] tracking-tight text-blue-950 sm:text-4xl">
            Description
          </h2>
        </div>

        <DescriptionCreche />
      </div>
      <div>
      <h2 className="text-3xl font-bold font-[Inter] tracking-tight text-blue-950 text-center my-10 sm:text-4xl">
      Geolocalisation de la creche
          </h2>
     
        <div className="flex justify-center rounded-xl ring-4 bg-[#f7d7d6] ring-[#fc8280] px-5 py-5 mx-[20%] mb-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.97278256306!2d3.0813428!3d36.723214899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128faddf7f824d7f%3A0xfb77ea53037312b2!2sCreche%20Amoula!5e0!3m2!1sfr!2sdz!4v1682460139044!5m2!1sfr!2sdz"
            width="400"
            height="275"
            className=" ld: w-[600px] ld: h-[450px]"
            allowfullscreen=""
            loading="eager"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
     
      <div className="relative z-0 w-full mb-6 group flex justify-center">
        <Accordion2/>
        </div>
   
      <AvisCreche />
      <Footer />
    </>
  );
}
