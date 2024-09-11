import React from "react";
import { Link } from "react-router-dom";

function Recent() {
  return (
    <>
      <section id="project" className="mb-20  z-10 relative ">
        <div className=" px-40 relative">
          <div className=" mx-auto w-full max-w-6xl">
            <div className="flex justify-between pt-28">
              <div className=" max-w-lg gap-y-12 flex flex-col">
                <div>
                  <h2 className="text-black p-0 m-0 text-7xl leading-normal font-medium">
                    Recent work
                  </h2>

                  <div className=" text-gray-700 text-xl leading-normal">
                    I am continually eager to take on new challenges,
                    collaborating with individuals and companies to bring their
                    product ideas to life.
                  </div>
                </div>
              </div>
              <div className=" h-3 relative top-4">
                {/* <Link to='/projects'>
                                    <button className=' flex gap-x-1 justify-center items-center rounded-full w-44 h-44 text-white font-semibold text-lg  bg-my-blue hover:bg-hover-blue'>
                                        <div> See all </div>
                                        <div className=' w-4 h-4 overflow-hidden '>
                                            <svg width="100%" height="100%" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.59473 18.7988L18.5947 6.79883" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M8.84473 6.79883H18.5947V16.5488" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </div>

                                        </button>
                        </Link> */}
              </div>
            </div>
            <div className="flex gap-x-16 mt-16 justify-between ">
              <div className="   max-w-sm rounded overflow-hidden shadow-2xl shadow-main-black">
                <img className="w-full" src="webd.png" alt="code" />
                <div class="px-6 py-4  ">
                  <div className="flex flex-row gap-x-16">
                    <div class="font-bold text-xl mb-2">Bhagvad Gita</div>
                    <div className="flex flex-row gap-x-2">
                        <a href='https://bhagvad-gita-io.vercel.app' target="_blank">
                      <button className="  w-12 h-8 rounded-full bg-transparent border-2 border-my-blue hover:bg-my-blue flex justify-center">
                        <div className=" w-6 h-7 overflow-hidden ">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className=" hover:stroke-white"
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
                      </a>
                      <a href="https://github.com/AbhayKatoch/Bhagvad-Gita.io" target="_blank">
                      
                      <div className=" w-8 h-9 overflow-hidden cursor-pointer">
                        <img src="github-mark.png" alt="" />
                      </div>
                      </a>
                    </div>
                  </div>
                  <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
              </div>
              <div className="  h-5/6  max-w-sm rounded overflow-hidden shadow-2xl shadow-main-black">
                <img className="w-full" src="webd.png" alt="code" />
                <div class="px-6 py-4  ">
                  <div className="flex flex-row gap-x-16">
                    <div class="font-bold text-xl mb-2">GitPro Finder</div>
                    <div className="flex flex-row gap-x-2">
                      <a href="https://abhaykatoch.github.io/fyle-internship-challenge-23/">
                      <button className="  w-12 h-8 rounded-full bg-transparent border-2 border-my-blue hover:bg-my-blue flex justify-center">
                        <div className=" w-6 h-7 overflow-hidden ">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className=" hover:stroke-white"
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
                      </a>

                      <div className=" w-8 h-9 overflow-hidden ">
                        <a href="https://github.com/AbhayKatoch/Git-Pro-Finder/tree/master">
                        
                        <img src="github-mark.png" alt=""  />
                        </a>
                      </div>
                    </div>
                  </div>
                  <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
              </div>
              <div className="  h-5/6  max-w-sm rounded overflow-hidden shadow-2xl shadow-main-black">
                <img className="w-full" src="webd.png" alt="code" />
                <div class="px-6 py-4  ">
                  <div className="flex flex-row gap-x-16">
                    <div class="font-bold text-xl mb-2">Github Finder</div>
                    <div className="flex flex-row gap-x-2">
                      <button className="  w-12 h-8 rounded-full bg-transparent border-2 border-my-blue hover:bg-my-blue flex justify-center">
                        <div className=" w-6 h-7 overflow-hidden ">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className=" hover:stroke-white"
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
                      <div className=" w-8 h-9 overflow-hidden ">
                        <img src="github-mark.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Recent;
