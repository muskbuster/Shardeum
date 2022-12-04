import React, { useState, useEffect } from "react";
import { Link, Outlet,  } from "react-router-dom";


export default function Navbar(props) {
  const [goingUp, setGoingUp] = useState(true);
  const [sideMenu, setsideMenu] = useState(true);
  const [flyer, setFlyer] = React.useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (100 < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (100 > currentScrollY && !goingUp) {
        setGoingUp(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  const handleSubmit = () => {
    return (
      console.log(localStorage.getItem("user"))
    );
  }

  function Items({ ItemName, path }) {
    return (
      <li>
        <Link
          to={path}
          class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#fa9324] group md:p-0"
          aria-current="page"
          onClick={() => {setsideMenu(!sideMenu);}}
        >
          {ItemName}
          <span className="sm:hidden md:hidden lg:block w-full h-1 transition-transform  scale-x-0 rounded-full transform group-hover:scale-x-100 bg-[#fa9324]"></span>
        </Link>
      </li>
    );
  }

  function FlyerCard({ FlyerName, link }) {
    return (
        
        <Link to={link} className="p-4 flex items-start rounded-lg hover:bg-[#fa9324] group" onClick={() => {setsideMenu(!sideMenu);}}>
            <p className="text-base font-medium text-gray-900 group-hover:text-white">
             {FlyerName}
            </p>
          
        </Link>
   
    );
  }

 

  return (
    <>
      <nav
        class={`px-2 sm:px-4 py-2.5 bg-white fixed w-full  lg:text-xl z-20 top-0 left-0 font-GorditaRegular shadow-lg ${goingUp ? "" : "shadow-2xl"
        }`}
      >
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <div class="flex md:order-2">
            <div clas="felx flex-col justify-center items-center "> 
              <button
                type="button"
                class="inline-flex items-center bg-[#fa9324] text-white border-2 font-bold border-transparent py-3 px-8 focus:outline-none hover:bg-white hover:text-[#fa9324] hover:border-2 hover:border-[#fa9324] text-base mt-4 md:mt-0  rounded-full"  
                onClick={props.onClick}>
                {props.tag}
              </button>
            </div>

            <button data-collapse-toggle="navbar-sticky" type="button"
            class="inline-flex items-center p-2  text-sm text-gray-500 rounded-lg md:hidden hover:bg-white focus:outline-none focus:ring-2 focus:ring-white group "
              onClick={() => {
                setsideMenu(!sideMenu);
              }}
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {/* ----------menu items---------- */}

          <div class={` ${sideMenu ? "hidden" : ""} lg:block justify-between items-center w-full md:flex md:w-auto md:order-1 `}>
            <ul class="flex flex-col p-4 mt-4  md:flex-row md:space-x-8 md:mt-0 md:border-0 lg:text-xl " >
              <li>
        <a
          to={'/'}
          class="block py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:hover:bg-transparent text-[#fa9324] group md:p-0 font-medium "
        >
          TryFit
          <span className="sm:hidden md:hidden lg:block w-full h-1 transition-transform  scale-x-0 rounded-full transform group-hover:scale-x-100 bg-[#fa9324]"></span>
        </a>
      </li>

              {/* ------------drop menu------------------- */}
              <li>
                <div className="relative lg:py-0 md:py-0 sm:py-2 pr-4 pl-3">
                  <button
                    type="button"
                    className="group rounded-md text-gray-700 inline-flex items-center  hover:text-gray-900  pb-8'"
                    onClick={() => (setFlyer(!flyer))}
                  >
                    <span className="hover:text-[#fa9324]">Habits<span className="sm:hidden md:hidden lg:block w-full h-1 transition-transform  scale-x-0 rounded-full transform group-hover:scale-x-100 bg-[#fa9324]"></span></span>

                    <svg className={
                        flyer === true
                          ? "transform rotate-180 ml-2 h-5 w-5 text-gray-700 group-hover:text-gray-500 transition ease-out duration-200"
                          : "transform rotate-0 transition ease-out duration-200 ml-2 h-5 w-5 text-gray-700 group-hover:text-gray-500"
                      }
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  <div
                    onMouseLeave={() => setFlyer(false)}
                    className={
                      flyer
                        ? "block container mx-auto translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2  lg:w-max md:w-max sm:w-screen sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                        : "hidden translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                    }
                  >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white sm:gap-8 sm:p-8">
                        <FlyerCard FlyerName="Steps" link="/stepTracker"/>
                        <FlyerCard FlyerName="Hydration" link="/HydrateTracker"/>
                        <FlyerCard FlyerName="Calorie"link="/CalorieBurnt"/>
                        <FlyerCard FlyerName="Add Your Habit" link="/add"/>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <Items ItemName="Reedem" path="/redem"/>
              <li>
                <a
                  to="/Sign"
                  class="lg:hidden block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent group md:hover:text-blue-700 md:p-0 "
                  onClick={() => {setsideMenu(!sideMenu);}}
                >
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
