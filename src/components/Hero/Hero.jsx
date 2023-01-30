import React from "react";
import robot from "../../assets/robot.png";
import { FcGoogle } from "react-icons/fc";
import { BiCheckDouble } from "react-icons/bi";
import { MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";
import confetti from "canvas-confetti";

function Hero() {
  const welcomeMsg = () => {
    console.log("click");
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };
  return (
    <>
      <div className=" h-screen w-full bg-gradient-to-bl from-current via-slate-900 to-black text-white">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-5 flex justify-center order-2 md:order-1 ">
            <div className=" px-20 flex justify-center items-center">
              <div className="mt-4">
                <div className="flex items-center gap-x-2">
                  <p
                    className="transition duration-150 ease-in-out "
                    data-bs-toggle="tooltip"
                    title="Hi! I'm tooltip"
                  >
                    Shamaun Nabi
                  </p>
                  <MdVerified />
                </div>
                <h4 className="mt-4 md:mt-14 text-2xl">A New Innovation</h4>
                <h2 className="text-2xl md:text-6xl font-bold mt-3 ">
                  ASK ME 2.0 GET ChatGPT Feel...
                </h2>
                <div className="mt-4">
                  <button
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="bg-slate-800 px-4 py-2 shadow-xl rounded-md flex gap-2"
                  >
                    <FcGoogle className="text-xl" />
                    <span> Google Sign In</span>
                  </button>
                  <Link to={"/chat"}>
                    <button
                      onClick={welcomeMsg}
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      className="bg-slate-800  mt-2 px-4 py-2 shadow-xl rounded-md flex gap-2"
                    >
                      <BiCheckDouble className="text-xl" />
                      <span> Get Started</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7  order-1 md:order-2">
            <div className="flex justify-center items-baseline md:items-center">
              <img
                className=" h-[300px] md:h-[635px] md:w-[550px]"
                src={robot}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
