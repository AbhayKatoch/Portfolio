import React from 'react'
import { Link } from 'react-router-dom'

function Expertise() {
  return (
    <>
        <section className=' bg-main-bg relative pb-56 z-10  '>
            <div className=' px-40 '>
                <div className=" w-full max-w-6xl">
                    <div className='w-full pt-10'>
                        <div className='text-white flex  justify-between gap-y-5 mt-16'>
                            <div  className=' max-w-lg gap-y-16 flex-col max-h-96 flex items-start sticky top-8 '>
                                <div className=' gap-y-4 flex flex-col'>
                                    <h1 className=' my-0 text-7xl leading-normal  font-medium'>Expertise</h1>
                                    <div className=' text-main-black leading-normal text-xl'>I am dedicated to developing digital products that positively impact people's lives. My extensive experience across various design disciplines enables me to effectively translate abstract concepts into tangible real-world results. As a digital product designer, my aim is to consistently benefit users and make a meaningful impact through my work.</div>

                                </div>
                                <div>
                                   <Link to="mailto:abhaykatoch210@gmail.com">
                                    <button className=' flex gap-x-1 justify-center items-center rounded-full w-44 h-44 text-white font-semibold text-lg  bg-my-blue hover:bg-hover-blue'>
                                        <div> Let's talk </div>
                                        <div className=' w-4 h-4 overflow-hidden '>
                                            <svg width="100%" height="100%" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.59473 18.7988L18.5947 6.79883" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M8.84473 6.79883H18.5947V16.5488" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </div>

                                        </button>
                                   </Link>
                                
                                </div>
                            </div>
                            
                            <div className=' max-w-lg gap-y-8 gap-x-8 flex-col flex'>
                                <div className=' w-full max-w-lg  flex flex-col gap-y-6 relative top-10'>
                                    <h3 className=' leading-5 my-0 font-semibold text-3xl'>Frontend Development</h3>
                                    <div className=' text-lg text-main-black leading-normal'>Elevate your digital products with a user-centric design approach that guarantees intuitive and delightful user experiences. I am skilled in crafting interfaces that seamlessly guide users through your application, resulting in increased engagement and higher conversion rates. Overcome complex navigation challenges and significantly boost user satisfaction.</div>
                                    <div className='flex flex-wrap gap-x-4  gap-y-4'>
                                        <div className='w-28 h-12 rounded-3xl bg-transparent gap-x-2 items-center border-2 border-my-blue flex justify-center'>
                                            <div className='w-6 h-5'> <img src="htmlLogo.png" alt="" /></div>
                                            <div className=' '>HTML</div>

                                        </div>
                                        <div className='w-28 h-12 rounded-3xl bg-transparent gap-x-2 items-center border-2 border-my-blue flex justify-center'>
                                            <div className='w-5 h-5'> <img src="csslogo.png" alt="" /></div>
                                            <div className=' '>CSS</div>

                                        </div>
                                        <div className='w-36 h-12 rounded-3xl bg-transparent gap-x-2 items-center border-2 border-my-blue flex justify-center'>
                                            <div className='w-5 h-5'> <img src="javascriptlogo.png" alt="" /></div>
                                            <div className=' '>Javascript</div>

                                        </div>
                                        <div className='w-28 h-12 rounded-3xl bg-transparent gap-x-3 items-center border-2 border-my-blue flex justify-center'>
                                            <div className='w-5 h-5'> <img src="reactlogo.png" alt="" /></div>
                                            <div className=' '>React</div>

                                        </div>
                                        <div className='w-36 h-12 rounded-3xl bg-transparent gap-x-3 items-center border-2 border-my-blue flex justify-center'>
                                            <div className='w-5 h-5 relative top-1'> <img src="tailwindcss.svg" alt="" /></div>
                                            <div className=' '>Tailwindcss</div>

                                        </div>
                                        <div className='w-36 h-12 rounded-3xl bg-transparent gap-x-3 items-center border-2 border-my-blue flex justify-center'>
                                            <div className='w-5 h-5'> <img src="bootstrap.png" alt="" /></div>
                                            <div className=' '>Bootstrap</div>

                                        </div>
                                    </div>
                                    <div className=' pt-3'></div>
                                    <div className=' border  border-main-black mb-5'></div>
                                </div>
                                <div className=' w-full max-w-lg  flex flex-col gap-y-6 relative top-10'>
                                    <h3 className=' leading-5 my-0 font-semibold text-3xl'>Backend Development</h3>
                                    <div className=' text-lg text-main-black leading-normal'>Elevate your digital products with a user-centric design approach that guarantees intuitive and delightful user experiences. I am skilled in crafting interfaces that seamlessly guide users through your application, resulting in increased engagement and higher conversion rates. Overcome complex navigation challenges and significantly boost user satisfaction.</div>
                                    <div className='flex flex-wrap gap-x-4  gap-y-4'>
                                        <div className='w-28 h-12 rounded-3xl bg-transparent gap-x-2 items-center border-2 border-my-blue flex justify-center'>
                                            <div className='w-6 h-5'> <img src="node (1).png" alt="" /></div>
                                            <div className=' '>Nodejs</div>

                                        </div>
                                        <div className='w-36 h-12 rounded-3xl bg-transparent gap-x-2 items-center border-2 border-my-blue flex justify-center'>
                                            <div className='w-6 h-5'> <img src="MongoDb.png" alt="" /></div>
                                            <div className=' '>MongoDB</div>

                                        </div>
                                        <div className='w-36 h-12 rounded-3xl bg-transparent gap-x-2 items-center border-2 border-my-blue flex justify-center'>
                                            <div className='w-6 h-5'> <img src="django.png" alt="" /></div>
                                            <div className=' '>Django</div>

                                        </div>
                                        <div className='w-28 h-12 rounded-3xl bg-transparent gap-x-3 items-center border-2 border-my-blue flex justify-center'>
                                            <div className='w-6 h-5'> <img src="sql.png" alt="" /></div>
                                            <div className=' '>MySQL</div>

                                        </div>
                                        <div className='w-28 h-12 rounded-3xl bg-transparent gap-x-3 items-center border-2 border-my-blue flex justify-center'>
                                            <div className='w-6 h-5'> <img src="git.png" alt="" /></div>
                                            <div className=' '>Git</div>

                                        </div>
                                        <div className='w-28 h-12 rounded-3xl bg-transparent gap-x-3 items-center border-2 border-my-blue flex justify-center'>
                                            <div className='w-6 h-5'> <img src="api.png" alt="" /></div>
                                            <div className=' '>API</div>

                                        </div>
                                        
                                    </div>
                                    <div className=' pt-3'></div>
                                    <div className=' border  border-main-black mb-5'></div>
                                    
                                </div>
                                <div className=' w-full max-w-lg  flex flex-col gap-y-6 relative top-10'>
                                    <h3 className=' leading-5 my-0 font-semibold text-3xl'>User Experience Design</h3>
                                    <div className=' text-lg text-main-black leading-normal'>Elevate your digital products with a user-centric design approach that guarantees intuitive and delightful user experiences. I am skilled in crafting interfaces that seamlessly guide users through your application, resulting in increased engagement and higher conversion rates. Overcome complex navigation challenges and significantly boost user satisfaction.</div>
                                    <div className='flex flex-wrap gap-x-4  gap-y-4'>
                                        <div className='w-40 h-12 rounded-3xl bg-transparent gap-x-2 items-center border-2 border-my-blue flex justify-center'>
                                            <div className='w-6 h-6'> <img src="research.png" alt="" /></div>
                                            <div className=' '>User Research</div>

                                        </div>
                                        <div className='w-36 h-12 rounded-3xl bg-transparent gap-x-2 items-center border-2 border-my-blue flex justify-center'>
                                            <div className='w-6 h-6 '> <img src="flow (1).png" alt="" /></div>
                                            <div className=' '>User Flows</div>

                                        </div>
                                        <div className='w-36 h-12 rounded-3xl bg-transparent gap-x-2 items-center border-2 border-my-blue flex justify-center'>
                                            <div className='w-6 h-6'> <img src="frame.png" alt="" /></div>
                                            <div className=' '>Wireframing</div>

                                        </div>
                                        <div className='w-48 h-12 rounded-3xl bg-transparent gap-x-3 items-center border-2 border-my-blue flex justify-center'>
                                            <div className='w-6 h-6'> <img src="think.png" alt="" /></div>
                                            <div className=' '>Design Thinking</div>

                                        </div>
                                        <div className='w-44 h-12 rounded-3xl bg-transparent gap-x-3 items-center border-2 border-my-blue flex justify-center'>
                                            <div className='w-6 h-6 relative'> <img src="persona.png" alt="" /></div>
                                            <div className=' '>User Personas</div>

                                        </div>
                                        
                                    </div>
                                    <div className=' pt-3'></div>
                                    <div className=' border  border-main-black mb-5'></div>
                                </div>
                                <div className=' w-full max-w-lg  flex flex-col gap-y-6 relative top-10'>
                                    <h3 className=' leading-5 my-0 font-semibold text-3xl'>User Interface Design</h3>
                                    <div className=' text-lg text-main-black leading-normal'>Transform your concepts into visually stunning interfaces with my design expertise. I am dedicated to creating attractive, user-friendly interfaces that align seamlessly with your brand identity. I give meticulous attention to every pixel, ensuring that your product is not only visually appealing but also intuitively usable.</div>
                                    <div className='flex flex-wrap gap-x-4  gap-y-4'>
                                        <div className='w-28 h-12 rounded-3xl bg-transparent gap-x-2 items-center border-2 border-my-blue flex justify-center'>
                                            <div className='w-3 h-4'> <img src="Figmalogo.png" alt="" /></div>
                                            <div className=' '>Figma</div>

                                        </div>
                                        <div className='w-32 h-12 rounded-3xl bg-transparent gap-x-2 items-center border-2 border-my-blue flex justify-center'>
                                            <div className='w-6 h-5'> <img className=' rounded-full' src="download (6).png" alt="" /></div>
                                            <div className=' '>Balsamiq</div>

                                        </div>
                                        <div className='w-36 h-12 rounded-3xl bg-transparent gap-x-2 items-center border-2 border-my-blue flex justify-center'>
                                            <div className='w-6 h-5'> <img src="xd.png" alt="" /></div>
                                            <div className=' '>Adobe XD</div>

                                        </div>
                                        <div className='w-52 h-12 rounded-3xl bg-transparent gap-x-3 items-center border-2 border-my-blue flex justify-center'>
                                            <div className='w-8 h-8'> <img src="web.png" alt="" /></div>
                                            <div className=' '>Interaction Design</div>

                                        </div>
                                        <div className='w-48 h-12 rounded-3xl bg-transparent gap-x-3 items-center border-2 border-my-blue flex justify-center'>
                                            <div className='w-8 h-9 relative top-1'> <img src="mobile.png" alt="" /></div>
                                            <div className=' '>Mobile Design</div>

                                        </div>
                                        
                                    </div>
                                    <div className=' pt-3'></div>
                                    <div className=' border  border-main-black mb-5'></div>
                                </div>
                                
                                
                                
                                
                            </div>
                        </div>
                    
                    </div>
                
                </div>

            </div>
            

        </section>
    </>
  )
}

export default Expertise