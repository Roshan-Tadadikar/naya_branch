import React from "react";
import IndexNavbar from "Components/Navbars/IndexNavbar.js";
import bmw from "images/bmw-engine.jpg";
const Step2 = ({ prevStep, nextStep, handleChange, values }) => {
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
            "url('https://images.unsplash.com/photo-1595787142842-7404bc60470d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <span
          id="blackOverlay"
          className="w-full h-full absolute opacity-75 bg-black"
        ></span>
      </div>
      <div className="container relative mx-auto mt-20 text-white">
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                What is your Engine Specifications?
              </h1>
              <p className="mb-8 leading-relaxed">
                Not all buyers will be enthusiasts. The latter breed actually
                knows what they want and will have already done extensive
                research on this. Buy a car with an engine that puts you at
                ease, depending on what you expect from the car.
              </p>
              <div className="flex w-full justify-center items-end">
                <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                  <label
                    for="hero-field"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Placeholder
                  </label>
                  <input
                    type="text"
                    id="displacement"
                    name="displacement"
                    value={values.displacement}
                    className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-white"
                    onChange={handleChange('displacement')}
                    maxLength={4}
                    minLength={3}
                    placeholder="Please enter a value between 500 to 5000"
                  />
                </div>
                {/* <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Button
                </button> */}
              </div>
              <p className="text-sm mt-2 text-gray-500 mb-8 w-full"></p>
              <div className="flex">
                <button className="bg-gray-100 inline-flex py-3 px-5 mr-2 rounded-lg items-center hover:bg-gray-800 hover:text-white focus:outline-none">
                  <i className="fas fa-caret-left text-2xl text-black"></i>
                  <span className="ml-4 flex items-start flex-col leading-none hover:text-white">
                    <span
                      className="title-font font-medium text-black hover:text-white"
                      onClick={Previous}
                    >
                      Prev
                    </span>
                  </span>
                </button>
                <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-800 hover:text-white focus:outline-none">
                  <i className="fas fa-caret-right text-2xl text-black"></i>
                  <span className="ml-4 flex items-start flex-col leading-none hover:text-white">
                    <span
                      className="title-font font-medium text-black hover:text-white"
                      onClick={Continue}
                    >
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
export default Step2;
