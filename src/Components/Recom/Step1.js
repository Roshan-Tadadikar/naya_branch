import React from "react";
import IndexNavbar from "Components/Navbars/IndexNavbar.js";
const Step1 = ({ nextStep, handleChange, values }) => {
  // for continue event listener
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    // <div className="bg-sky-500  border-2 mt-24">
    //   <h1>step 1</h1>
    //   <form>
    //     <label>
    //       budget
    //       <input
    //         type="text"
    //         value={values.budget}
    //         placeholder="budget"
    //         onChange={handleChange("budget")}
    //       />
    //     </label>
    //     <div className="bg-green-400">
    //       <button
    //         className="bg-blue-500 hover:bg-blue-700
    //        font-bold py-2 px-4 rounded  "
    //       >
    //         Button
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
            "url('https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&q=80')",
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
                What is your Budget?
              </h1>
              <p className="mb-8 leading-relaxed">
                Most of your desired cars will mostly depend on your budget,
                good Budget means good car so set your budget accordingly.
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
                    id="price"
                    name="price"
                    value={values.price}
                    className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-white"
                    onChange={handleChange('price')}
                    inputProps={{max:10000000, min:200000}}
                    maxLength={8}
                    minLength={6}
                    placeholder="Please enter a value between 200000 and 10000000"
                    />
                </div>
                {/* <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Button
                  </button> */}
              </div>

              <p className="text-sm mt-2 text-gray-500 mb-8 w-full"></p>
              <div className="flex">
                <button
                  className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-800 hover:text-white focus:outline-none"
                  onClick={Continue}
                >
                  <i className="fas fa-caret-right text-2xl text-black"></i>
                  <span className="ml-4 flex items-start flex-col leading-none hover:text-white">
                    <span className="title-font font-medium text-black hover:text-white">
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
export default Step1;
