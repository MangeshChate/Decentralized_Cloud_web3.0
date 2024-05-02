import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import hero1 from "../../images/hero1.jpeg";
import hero2 from "../../images/hero2.jpeg";
import {Link} from "react-router-dom"

import { Loader } from ".";

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {




  return (
    <div className="flex w-full justify-center mt-5 mt-lg-0 items-center  h-[100vh] pb-5 pb-lg-0">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4 gap-lg-5 overflow-visible sm:overflow-hidden lg:overflow-visible md:overflow-visible">
        <div className="flex pt-5 mt-5 pt-lg-0 mt-lg-0 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-4xl lg:text-6xl  text-white text-gradient py-1">
            Revolutionizing the  E-Vault <br /> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Blockchain-powered cloud for secure data freedom..
          </p>

          <Link to="/storage"
            type="button"

            className="flex flex-row justify-center items-center my-5 bg-red-500 p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
          >
            <AiFillPlayCircle className="text-white mr-2" />
            <p className="text-white text-base font-semibold">
              Connect Wallet
            </p>
          </Link>


        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10 ">

          <div className="position-relative">
           <img src="https://wrapime.com/wp-content/uploads/2024/04/one-piece-luffy-gear-five.png" alt="" className="rounded-5  w-[700px]" />
          </div>


        </div>
      </div>
    </div>
  );
};

export default Welcome;
