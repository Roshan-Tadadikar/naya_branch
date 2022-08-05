import React from "react";
import axios from "axios";
import { useState } from "react";
// import { useHistory } from "react-router-dom";
import Results from "./Results";

const Confirmation = ({ prevStep, nextStep, values }) => {
  console.log(values);
  // const { price, displacement, fuel, power } = values;
  // const Continue = (e) => {
  //   e.preventDefault();
  //   nextStep();
  // };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  const[dat, setData] = useState({})
  const[showBttnClick, setBtnClick] = useState(false)

  // let history = useHistory();

  const userData = {
    price: values.price,
    displacement: values.displacement,
    fuel: values.fuel,
    power: values.power
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log(userData)
    axios.post("http://127.0.0.1:8000/Recom", userData).then((response) => {
      console.log(response.status);
      console.log(response.data.result);
      const val = JSON.parse(response.data.result)
      console.log("cons",val)
          setData(val)
          setBtnClick(true)
     
    });

    // history.push("/results")

    document.getElementById("input").style.display="none";
document.getElementById("res").style.display="block";
  };

  console.log("hello11s")
  return (
    <div>
      {/* <div className="bg-green-100">
        <button
          className="bg-blue-500 hover:bg-blue-700 
           font-bold py-2 px-4 rounded  "
          onClick={Previous}
        >
          Previos
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 
           font-bold py-2 px-4 rounded  "
          onClick={handleSubmit}
        >
          Confirm and next
        </button>
      </div> */}

      {/* mine starts here */}
      <div className="" id="input" style={{display:"block"}}>
<section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Your Inputs</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Please confirmm your inputs</p>
      <div class="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
        <button class="py-1 px-4 bg-indigo-500 text-white focus:outline-none"  onClick={Previous}>Previous</button>
        <button class="py-1 px-4 focus:outline-none hover:bg-gray-600 hover:text-white" onClick={handleSubmit} >Confirm and next</button>
      </div>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full ">
        <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden hover:border-2 hover:border-indigo-500">
          <h2 class="text-sm tracking-widest title-font mb-1 font-medium">Your</h2>
          <h1 class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">Budget</h1>
          <p class="flex items-center text-gray-600 mb-2">
          <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Requirement is
          </p>

             
          <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4  mt-12 mb-12">
            <span>{userData.price}</span>
            
          </h1>
       
          <p class="text-xs text-gray-500 mt-3">You can Always navigate Back!</p>
        </div>
      </div>
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 flex flex-col relative overflow-hidden hover:border-2 hover:border-indigo-500">
          <h2 class="text-sm tracking-widest title-font mb-1 font-medium">Your</h2>
          <h1 class="text-4xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
          Displacement
          </h1>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Requirement is
          </p>

   
          <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4  mt-12 mb-12">
            <span>{userData.displacement}</span>
            
          </h1>
         
          <p class="text-xs text-gray-500 mt-3">You can Always navigate Back!</p>
        </div>
      </div>
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden hover:border-2 hover:border-indigo-500">
          <h2 class="text-sm tracking-widest title-font mb-1 font-medium">Your</h2>
          <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
            Fuel Type
          </h1>
          
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Requirement is
          </p>
             
          <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4  mt-12 mb-12">
            <span>{userData.fuel}</span>
            
          </h1>

         
          <p class="text-xs text-gray-500 mt-3">You can Always navigate Back!</p>
        </div>
      </div>
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden hover:border-2 hover:border-indigo-500">
          <h2 class="text-sm tracking-widest title-font mb-1 font-medium">Your</h2>
          <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
            Power
          </h1>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Requirement is
          </p>
         
          <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4  mt-12 mb-12">
            <span>{userData.power}</span>
            
          </h1>
         
          <p class="text-xs text-gray-500 mt-3">You can Always navigate Back!</p>
        </div>
      </div>
    </div>
  </div>
</section>
</div>

<div style={{display:"none"}} id="res">
{showBttnClick &&
  <Results result={dat}  />}
</div>
    </div>
  );
};
export default Confirmation;
