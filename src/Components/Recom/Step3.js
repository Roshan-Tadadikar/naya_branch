import React from "react";
import IndexNavbar from "Components/Navbars/IndexNavbar.js";
import bmw from "images/bmw-engine.jpg";
const Step3 = ({ prevStep, nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    // <div>
    //   <form>
    //     <label>
    //       info1
    //       <input
    //         type="text"
    //         value={values.info1}
    //         placeholder="info1"
    //         onChange={handleChange("info1")}
    //       />
    //     </label>

    //     <label>
    //       brand
    //       <input
    //         type="text"
    //         value={values.brand}
    //         placeholder="brand"
    //         onChange={handleChange("brand")}
    //       />
    //     </label>
    //     <div className="bg-green-100">
    //       <button
    //         className="bg-blue-500 hover:bg-blue-700
    //        font-bold py-2 px-4 rounded  "
    //         onClick={Previous}
    //       >
    //         Previos
    //       </button>
    //       <button
    //         className="bg-blue-500 hover:bg-blue-700
    //        font-bold py-2 px-4 rounded  "
    //         onClick={Continue}
    //       >
    //         Next
    //       </button>
    //     </div>
    //   </form>
    // </div>

    <div>
      <IndexNavbar fixed />
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1571892413116-7fa28aaf3632?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80')",
        }}
      >
        <span
          id="blackOverlay"
          className="w-full h-full absolute opacity-75 bg-black"
        ></span>
      </div>
      <div className="container relative mx-auto mt-20 text-white">
        <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <div className="items-center flex flex-wrap">
            <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                How much Power you need(Torque)?
              </h1>
              <p class="mb-8 leading-relaxed">
                Torque is more preferred in start stop situations. The more the
                torque in the lower gears the better and faster the car will
                start from rest. Horse power will give you the punch on the
                straights and open road. There is no use of it in bumper to
                bumper city traffic.
              </p>
              <div class="flex w-full justify-center items-end">
                <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                  <label
                    for="hero-field"
                    class="leading-7 text-sm text-gray-600"
                  >
                    Placeholder
                  </label>
                  <input
                    type="text"
                    id="Powe"
                    name="Powe"
                    value={values.power}
                    class="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-white"
                    onChange={handleChange('power')}
                    maxLength={4}
                    minLength={2}
                    placeholder="Please enter a value between 50 to 1000"
                  />
                </div>
                {/* <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Button
                </button> */}
              </div>
              <p class="text-sm mt-2 text-gray-500 mb-8 w-full"></p>
              <div class="flex">
                <button
                  class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-800 hover:text-white focus:outline-none mr-2"
                  onClick={Previous}
                >
                  <i class="fas fa-caret-left text-2xl text-black"></i>
                  <span class="ml-4 flex items-start flex-col leading-none hover:text-white">
                    <span class="title-font font-medium text-black hover:text-white">
                      Prev
                    </span>
                  </span>
                </button>
                <button
                  class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-800 hover:text-white focus:outline-none"
                  onClick={Continue}
                >
                  <i class="fas fa-caret-right text-2xl text-black"></i>
                  <span class="ml-4 flex items-start flex-col leading-none hover:text-white">
                    <span class="title-font font-medium text-black hover:text-white">
                      Next
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Step3;
