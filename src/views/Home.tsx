import React from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

// style
import '../assets/styles/home.css';
import { Carousel } from "flowbite-react";

// image
import slide1 from "../assets/images/designing-services-2.jpg";
import slide2 from "../assets/images/designing-services-3.jpg";
import local from "../assets/images/local.png";
import serving from "../assets/images/serving.jpg";
import creative from "../assets/images/creative.jpg";

const Home = () => {

    return (
        <div className="main width-full">

            <Header />
                <main className="main-page-section min-h-screen">
                    <div className="slider w-full sm:w-8/12 text-center mx-auto mt-1">
                        <Carousel
                         >
                            <img
                                src={slide1}
                                alt="..."
                            />
                            <img
                                src={slide2}
                                alt="..."
                            />
                        </Carousel>
                    </div>
                    <div className="main-section flex flex-col sm:flex-row w-5/6 md:w-8/12 mx-auto justify-around">
                        <div className="left w-full md:w-4/12">
                            <h2 className="font-semibold text-2xl text-gray-600 text-center">our products</h2>
                            <hr className="w-100 mt-3"/>
                            <div className="flex flex-row justify-around mb-5">
                                <ul className="list-disc pt-3">
                                    <li>
                                        lists item
                                    </li>
                                    <li>
                                        lists item
                                    </li>
                                    <li>
                                        lists item
                                    </li>
                                    <li>
                                        lists item
                                    </li>
                                    <li>
                                        lists item
                                    </li>
                                    <li>
                                        lists item
                                    </li>
                                    <li>
                                        lists item
                                    </li>
                                    <li>
                                        lists item
                                    </li>
                                </ul>
                                <ul className="list-disc  pt-3">
                                    <li>
                                        lists item
                                    </li>
                                    <li>
                                        lists item
                                    </li>
                                    <li>
                                        lists item
                                    </li>
                                    <li>
                                        lists item
                                    </li>
                                    <li>
                                        lists item
                                    </li>
                                    <li>
                                        lists item
                                    </li>
                                    <li>
                                        lists item
                                    </li>
                                    <li>
                                        lists item
                                    </li>
                                </ul>
                            </div>
                            <div className="flex">
                              <button className=" mx-auto text-3xl font-medium border-black border-2 pt-2 pb-3 bg-lime-500 hover:bg-white w-full mb-5 rounded-md ">Custom Us</button>
                            </div>
                        </div>
                        {/* right section */}
                        <div className="right w-full md:w-3/5">

                            {/* why axcent section */}
                            <h2 className="text-xl md:text-4xl pb-3 pt-2 bg-zinc-400 text-center text-white">
                                    Why Axcent Graphics ?
                            </h2>
                            <div className=" width-full">
                                <div className="flex flex-col md:flex-row justify-between mt-5">
                                    <img className="w-3/4 md:w-1/4 mx-auto" alt="local_image" src={local}/>
                                    <div className="flex flex-col text-center md:text-left w-3/4 mx-auto md:ml-5 mt-5 md:mt-0">
                                        <h3 className="text-xl text-black">LOCAL</h3>
                                        <p className="text-gray-400">Local businesses owned by people who live in this community are less likely to leave and are more invested in our area’s future. Think global. Buy local.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 width-full hidden md:block">
                                <div className="flex flex-col md:flex-row justify-between mt-5">
                                    <div className="flex flex-col text-center md:text-left w-3/4 mx-auto md:mr-5 mb-5 md:mb:0">
                                        <h3 className="text-xl text-black">VERSATILE</h3>
                                        <p className="text-gray-400">Local businesses owned by people who live in this community are less likely to leave and are more invested in our area’s future. Think global. Buy local.</p>
                                    </div>
                                    <img className="w-3/4 md:w-1/4 mx-auto" alt="local_image" src={serving}/>
                                </div>
                            </div>
                            <div className="mt-5 width-full mb-5">
                                <div className="flex flex-col md:flex-row justify-between mt-5">
                                    <img className="w-3/4 md:w-1/4 mx-auto" alt="local_image" src={creative}/>
                                    <div className="flex flex-col text-center md:text-left w-3/4 mx-auto md:ml-5 mt-5 md:mt-0">
                                        <h3 className="text-xl text-black">CREATIVITY</h3>
                                        <p className="text-gray-400">Local businesses owned by people who live in this community are less likely to leave and are more invested in our area’s future. Think global. Buy local.</p>
                                    </div>
                                </div>
                            </div>
                            {/* recent project */}
                            <h2 className="text-xl md:text-4xl pb-3 pt-2 bg-zinc-400 text-center text-white">
                                Recent Projects
                            </h2>
                            <div className="gallery flex flex-col md:flex-row mt-2 mb-5">
                                <div className="column-1 flex flex-col">
                                    <img className="p-2" alt="img-1" src={local}/>
                                    <img className="p-2" alt="img-2" src={serving}/>
                                </div>
                                <div className="column-2 flex flex-col">
                                    <img className="p-2" alt="img-3" src={serving}/>
                                    <img className="p-2" alt="img-4" src={creative}/>
                                </div>
                                <div className="column-3 flex flex-col">
                                    <img className="p-2" alt="img-5" src={creative}/>
                                    <img className="p-2" alt="img-6" src={local}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            <Footer />

        </div>
    )
}

export default Home;
