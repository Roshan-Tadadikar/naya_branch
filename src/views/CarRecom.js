import React from "react";
// import avatar from "../images/avatar.png";
import { useHistory } from "react-router-dom";
import IndexNavbar from "Components/Navbars/IndexNavbar.js";
import wallet from "../images/purse.jpg";
import car from "../images/Car.png";
import carengine from "../images/car-engine.jpg";
import carpump from "../images/gas-pump.jpg";

// const mystyle = {
//   fontFamily: "Product Sans",
// };

function CarRecom() {
  let history1 = useHistory();

  const history2 = () => {
    history1.push("/Start");
  };
  return (
    <div>
      <IndexNavbar fixed />
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto ">
          <div class="flex flex-wrap w-full mb-20 ">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Hey there Buddy!!
              </h1>
              <div class="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
              We will Recommend best cars for you, Based on your requirements
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/4 p-4 ">
              <div class="bg-gray-100 p-6 rounded-lg hover:bg-gray-800 hover:text-white">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-20"
                  src={wallet}
                  alt="content"
                />
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  BUDGET
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4 hover:text-white">
                  Luxury, Average
                </h2>
                <p class="leading-relaxed text-base">
                  Got Limited budget No problem!
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/4 p-4">
              <div class="bg-gray-100 p-6 rounded-lg hover:bg-gray-800 hover:text-white">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-14"
                  src={car}
                  alt="content"
                />
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  DISPLACEMENT
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4 hover:text-white">
                  1.2L, 1.6L
                </h2>
                <p class="leading-relaxed text-base">
                  Choose from a variety of desired engine's
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/4 p-4">
              <div class="bg-gray-100 p-6 rounded-lg hover:bg-gray-800 hover:text-white">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src={carengine}
                  alt="content"
                />
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font  ">
                  POWER
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4 hover:text-white">
                  100 Horses, 200 Horses
                </h2>
                <p class="leading-relaxed text-base">
                  Well Horsepower is really an import factor considered while
                  choosing a car
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/4 p-4">
              <div class="bg-gray-100 p-6 rounded-lg hover:bg-gray-800 hover:text-white">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-12 "
                  src={carpump}
                  alt="content"
                />
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font ">
                  FUEL TYPE
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4 hover:text-white">
                  Petrol, Diesel, CNG
                </h2>
                <p class="leading-relaxed text-base">
                  Fuel this days are so expensive so choose wisely
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <button
        className="flex mx-auto text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
        onClick={history2}
      >
        Start
      </button>
    </div>
  );
}

export default CarRecom;
