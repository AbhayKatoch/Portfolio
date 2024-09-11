import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { useCallback, useState, useEffect } from "react";

function Contact() {
  const [changeColor, setChangeColor] = useState("#6b7280");
  const [press, setPress] = useState(false);
  const copyToclip = useCallback(() => {
    setPress(true);
    setChangeColor("#ffffff");
    window.navigator.clipboard.writeText("abhaykatoch210@gmail.com");
    if (press == true) {
      setChangeColor("#6b7280");
      setPress(false);
    }
  });

  return (
    <>
      <Header />
      <section className=" z-0 relative bg-main-bg px-10 pt-12">
        <div className="mx-auto w-full max-w-6xl">
          <div className="relative min-h-screen flex flex-col items-stretch ">
            <div className="flex flex-col justify-between">
              <div className="flex p-0 gap-x-40">
                <div className=" items-start">
                  <h1 className="text-white font-sans text-7xl  font-bold tracking-wide ">
                    Let's start a <br />{" "}
                    <span className=" text-my-blue"> project together </span>
                  </h1>
                  <div className=" mt-20">
                    <form
                      action="get"
                      noValidate
                      className="border-t border-t-shade pt-12"
                    >
                      <div className=" flex flex-col justify-center items-start pb-14">
                        <label
                          htmlFor="name"
                          className="text-white font-semibold relative text-2xl pb-4"
                        >
                          <span className=" mr-6 text-main-black">01</span>{" "}
                          What's your name?
                        </label>
                        <input
                          type="text"
                          className="  bg-transparent pl-14 pb-12  w-full max-h-20 h-20 max-w-full min-w-full text-lg border-b border-b-shade  outline-none  text-white "
                          minLength={3}
                          placeholder="Abhy*"
                        />
                      </div>
                      <div className=" flex flex-col justify-center items-start pb-14">
                        <label
                          htmlFor="email"
                          className="text-white font-semibold relative text-2xl pb-4"
                        >
                          <span className=" mr-6 text-main-black">02</span>{" "}
                          What's your email?
                        </label>
                        <input
                          type="email"
                          className="  bg-transparent pl-14 pb-12  w-full max-h-20 h-20 max-w-full min-w-full text-lg border-b border-b-shade  outline-none  text-white"
                          minLength={3}
                          placeholder="abhay@gmail.com*"
                        />
                      </div>
                      <div className=" flex flex-col justify-center items-start pb-14">
                        <label
                          htmlFor="email"
                          className="text-white font-semibold relative text-2xl pb-4"
                        >
                          <span className=" mr-6 text-main-black">03</span>{" "}
                          What's the name of your organisation?
                        </label>
                        <input
                          type="email"
                          className="  bg-transparent pl-14 pb-12  w-full max-h-20 h-20 max-w-full min-w-full text-lg border-b border-b-shade  outline-none  text-white"
                          minLength={3}
                          placeholder="Abhay&comp*"
                        />
                      </div>
                      <div className=" ">
                        <div className=" flex flex-col justify-center items-start pb-14">
                          <label
                            htmlFor="msg"
                            className="text-white font-semibold relative text-2xl pb-4"
                          >
                            <span className=" mr-6 text-main-black">04</span>
                            Your Message
                          </label>
                          <textarea
                            type="text"
                            className="  bg-transparent pl-14 pb-24  w-full max-h-36 h-36 max-w-full min-w-full text-lg border-b border-b-shade  outline-none  text-white"
                            minLength={3}
                            placeholder="Hello! I am...."
                          />
                        </div>
                        <div className=" flex justify-end relative bottom-36 left-20 ">
                          <button
                            type="submit"
                            className=" flex gap-x-1 justify-center items-center rounded-full w-44 h-44 text-white font-semibold text-lg  bg-my-blue hover:bg-hover-blue"
                          >
                            <div> Send it </div>
                            <div className=" w-4 h-4 overflow-hidden ">
                              <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.59473 18.7988L18.5947 6.79883"
                                  stroke="currentColor"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                                <path
                                  d="M8.84473 6.79883H18.5947V16.5488"
                                  stroke="currentColor"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                            </div>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className=" flex text-white ">
                  <div className="flex flex-col gap-y-6 p-8 ">
                    <div className="w-28 h-28 rounded-full overflow-hidden">
                      <img src="1690132107498.jpeg" alt="" />
                    </div>
                    <div style={{ color: "#64bbcd" }} className="">
                      <div className="w-8 h-8">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 40 41"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 10.0342L30 30.0342"
                            stroke="currentColor"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M13.75 30.0342L30 30.0342L30 13.7842"
                            stroke="currentColor"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-2 text-2xl font-semibold">
                      <div className=" text-main-black ">Email me</div>
                      <div className="flex flex-row gap-x-1">
                        <div className="text-xl text-gray-200  hover:text-my-blue ">
                          <Link
                            to="mailto:abhaykatoch210@gmail.com"
                            className=" "
                          >
                            abhaykatoch210@gmail.com{" "}
                          </Link>
                        </div>
                        <div
                          style={{ color: changeColor }}
                          className="w-12 h-12 relative bottom-2 cursor-pointer   "
                          onClick={copyToclip}
                        >
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20.5264 24.1117C20.5264 21.9488 20.5264 20.8673 21.1983 20.1954C21.8702 19.5234 22.9517 19.5234 25.1146 19.5234H27.4087C29.5716 19.5234 30.6531 19.5234 31.325 20.1954C31.997 20.8673 31.997 21.9488 31.997 24.1117V27.9352C31.997 30.0981 31.997 31.1795 31.325 31.8515C30.6531 32.5234 29.5716 32.5234 27.4087 32.5234H25.1146C22.9517 32.5234 21.8702 32.5234 21.1983 31.8515C20.5264 31.1795 20.5264 30.0981 20.5264 27.9352V24.1117Z"
                              stroke="currentColor"
                            ></path>
                            <path
                              d="M19.3777 29.4737C18.0645 29.4737 17 28.4092 17 27.096V22.3406C17 19.3516 17 17.8571 17.9286 16.9286C18.8571 16 20.3516 16 23.3406 16H26.5108C27.824 16 28.8885 17.0645 28.8885 18.3777"
                              stroke="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div className="flex items-start text-main-black text-xl relative bottom-28">
              Made with 💙
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
