import React from "react";
import Logo from "./Assets/Logo1.svg";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import FloatingImage from "./Functions/FloatingImage";
const Login = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className=" flex items-center justify-center h-screen sm:grid-cols-2   ">
        <div className="flex flex-col justify-center bg-[#F5D5D5] h-0.662 w-0.46 sm:mx-4  p-[30px] mx-20 rounded-[30px]">
          <div className="w-[314px] mb-3 ">
            <h1 className="welcome font-normal text-[40px] leading-[44px] text-[#0B0C38] ">
              BIENVENUE !
            </h1>
          </div>
          <form className="login-form">
            <div className="flex flex-col gap-[30px]">
              <div className="form-item">
                <label
                  for="email"
                  className="inline-block absolute translate-x-[-7px,-50px] text-xl font-semibold text-[#0B0C38] w-[91px] h-[31px] not-italic leading-[31px]  "
                >
                  E-mail
                </label>
                <input
                  type="email"
                  className="border h-[55px] w-full transition-[background] duration-[0.5s] text-lg shadow-[-4.09869px_3.27895px_3px_rgba(0,0,0,0.25)] mt-8  rounded-[20px] border-solid border-[#FD8C7D] pl-5"
                />
              </div>
              <div className="form-item">
                <label
                  for="password"
                  className="inline-block absolute translate-x-[-7px,-20px] text-xl font-semibold text-[#0B0C38] "
                >
                  Mot de passe
                </label>
                <input
                  type="password"
                  className="border h-[55px] w-full transition-[background] duration-[0.5s] text-lg shadow-[-4.09869px_3.27895px_3px_rgba(0,0,0,0.25)] mt-8  rounded-[20px] border-solid border-[#FD8C7D] pl-5"
                />
              </div>
              <div className="form-item">
                <div className="flex items-center font-semibold gap-1.5">
                  <input
                    type="checkbox"
                    className="w-5 h-5 accent-[#FD8C7D] ml-5 mb-2"
                  />
                  <label for="checkbox" className="checkboxlabel mb-2">
                    Se souvenir de moi
                  </label>
                  <a
                    href="/"
                    className="text-[#191A43] font-semibold  hover:text-rose-500 hover:underline"
                  >
                    <span className="font-semibold ml-[70px] mb-2.5 ">
                      Mot de passe oublié ?
                    </span>
                  </a>
                </div>
              </div>
              <button
                className="bg-[#FD8C7D] mt-[-15px] text-[#191A42] text-center text-lg font-semibold h-[55px] cursor-pointer shadow-[0px_3.27895px_3.27895px_rgba(0,0,0,0.25),inset_3.27895px_6.5579px_3.27895px_rgba(0,0,0,0.25)] p-4 rounded-[20px] border-[none] hover:scale-95 duration-300 "
                type="submit"
              >
                Se connecter
              </button>
              <div className="flex justify-center font-semibold text-[#444B59] -mt-5">
                <p>
                  Vous n'avez pas de compte ?{" "}
                  <Link
                    to="/SignUp"
                    className="text-rose-950 border-b border-rose-950  hover:text-rose-500 hover:border-rose-500 "
                  >
                    {" "}
                    Inscivez vous{" "}
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
        <div className="hidden    sm:justify-center sm:flex sm:flex-col  sm:items-center     ">
          {/* <img className="logo  w-[440px] h-[440px] object-contain hover:scale-105 duration-300" src={Logo} alt="logo" /> */}
          <FloatingImage />
        </div>
      </div>
    </>
  );
};

export default Login;
