import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Expertise from "./Expertise";
import Contact from "./Contact";
import Recent from "./Recent";
import Contactme from "./Contactme";

function Home() {
  return (
    <>
      <div className="bg-white ">
        <section className=" pb-28 bg-main-bg z-10    items-center relative box-border block">
          <Header />
          <div className=" max-w-screen-lg ml-auto mr-auto">
            <div className=" flex flex-col text-center pt-12 justify-items-center gap-y-8 ">
              <div className=" z-10 flex flex-col justify-items-center gap-y-4">
                <div className="mx-auto w-28 h-28 rounded-full overflow-hidden">
                  <img src="1690132107498.jpeg" alt="" />
                </div>
                <div className="flex justify-items-center flex-col">
                  <div className=" font-sans text-4xl font-medium text-white mb-2">
                    Hello! I'm Abhay
                  </div>
                  <div style={{ color: "#97a4b6" }} className="uppercase">
                    Digital Product designer
                  </div>
                </div>
              </div>

              <div className=" z-10 text-center max-w-screen-2xl ">
                <div className="flex flex-col gap-y-6">
                  <h1 className="text-white m-0 p-0 font-sans text-6xl font-bold leading-tight ">
                    Crafting
                    <span style={{ color: "#64bbcd" }}>
                      {" "}
                      Useful Experiences
                    </span>
                    <br />
                    for Digital
                    <span style={{ color: "#64bbcd" }}> Products</span>
                  </h1>
                  <div className=" max-w-4xl  m-auto">
                    <div
                      style={{ color: "#97a4b6" }}
                      className=" text-lg font-sans tracking-wide text-center "
                    >
                      I develop innovative solutions by identifying key
                      problems, crafting meaningful experiences for end-users,
                      and aligning them with the product's context. This
                      involves deep research and empathy to ensure the design is
                      impactful and integrates seamlessly into daily life.
                    </div>
                  </div>
                </div>
              </div>
              {/* button */}
              <div className=" z-10 mt-2">
                <div className=" flex justify-center items-center flex-wrap gap-x-6">
                  <Link to="mailto:abhaykatoch210@gmail.com">
                    <button className=" bg-my-blue hover:bg-hover-blue  z-10 min-h-12 min-w-40 font-semibold text-white text-center justify-center flex overflow-hidden items-center pl-7 pr-7 text-xl rounded-3xl border-2 border-white ">
                      Let's Talk
                    </button>
                  </Link>
                  <a href="#about">
                    <button className=" bg-transparent hover:bg-my-blue z-10 min-h-12 min-w-40 font-semibold text-white text-center justify-center flex overflow-hidden items-center pl-7 pr-7 text-xl rounded-3xl border-2 border-white ">
                      Learn More
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className=" opacity-80 flex flex-col top-auto bottom-16 left-0 right-0 absolute">
            <img
              src="https://assets-global.website-files.com/656599b7d006b23a39ab1e36/6574c41d5b191847713da45a_her-2.png"
              alt=""
              className="transform-gpu mx-auto blur-5xl inline-block max-w-full w-part "
            />
          </div>

          <div className="max-w-full w-part h-part z-0 -top-15 right-0 absolute left-0 bottom-0 items-center mx-auto  flex flex-col">
            <img
              src="https://assets-global.website-files.com/656599b7d006b23a39ab1e36/6593e0f50fe9862f1ddc1e3a_svg-lines-hero.svg"
              alt=""
              className=""
            />
          </div>
        </section>

        <section id="about" className="z-30 relative mb-36">
          <div className="pl-40 pr-40">
            <div className="mx-auto max-w-7xl w-full">
              <div className="relative">
                <div className=" p-20 w-full"></div>
                <div>
                  <div className=" text-main-black uppercase font-medium font-sans  w-full pb-4">
                    <div>Nice to meet you!</div>
                  </div>
                  <div className="flex justify-between relative">
                    <div className=" max-w-3xl">
                      <div className="font-sans font-medium">
                        <div className=" overflow-hidden inline-block">
                          <div className="inline-block text-4xl leading-snug">
                            I assist startups in making valuable design
                            decisions at every stage of the product life cycle,
                            from introduction to the growth phase. My deep
                            understanding of business needs at each step enables
                            me to deliver the right solutions more quickly,
                            thereby accelerating innovation.
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div class="w-80 h-80 bg-neutral-800 group relative rounded-xl flex justify-center items-center overflow-hidden">
                        <div class="w-24 h-24 bottom-8 absolute bg-red-300">
                          <div class="w-24 h-24 absolute bg-neutral-50 duration-500 shadow-2xl [box-shadow:0px_-75px_55px_-30px_#262626] group-hover:[box-shadow:0px_-75px_95px_0px_#FDE047]">
                            <div class="w-24 h-24 bg-neutral-50 shadow-inner shadow-yellow-200"></div>
                            <div class="w-24 h-24 bg-neutral-50 absolute -bottom-12 rounded-full [transform:_rotateX(80deg)]"></div>
                            <div class="w-24 h-24 bg-yellow-400 border-4 border-yellow-300 absolute -top-12 rounded-full [transform:_rotateX(80deg)]"></div>
                          </div>
                          <svg
                            class="group-hover:-skew-x-2 duration-500 absolute rounded-full shadow-yellow-200 -top-12 left-4 fill-yellow-300 w-16 h-16"
                            height="100"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 100 100"
                            width="100"
                            x="0"
                            xmlns="http://www.w3.org/2000/svg"
                            y="0"
                          >
                            <path
                              class=""
                              d="M59.5,20.5a3.9,3.9,0,0,0-2.5-2,4.3,4.3,0,0,0-3.3.5,11.9,11.9,0,0,0-3.2,3.5,26,26,0,0,0-2.3,4.4,76.2,76.2,0,0,0-3.3,10.8,120.4,120.4,0,0,0-2.4,14.2,11.4,11.4,0,0,1-3.8-4.2c-1.3-2.7-1.5-6.1-1.5-10.5a4,4,0,0,0-2.5-3.7,3.8,3.8,0,0,0-4.3.9,27.7,27.7,0,1,0,39.2,0,62.4,62.4,0,0,1-5.3-5.8A42.9,42.9,0,0,1,59.5,20.5ZM58.4,70.3a11.9,11.9,0,0,1-20.3-8.4s3.5,2,9.9,2c0-4,2-15.9,5-17.9a21.7,21.7,0,0,0,5.4,7.5,11.8,11.8,0,0,1,3.5,8.4A12,12,0,0,1,58.4,70.3Z"
                              fill-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </section>

        <Expertise />
        <Recent />
        <Contactme />
      </div>
    </>
  );
}

export default Home;
