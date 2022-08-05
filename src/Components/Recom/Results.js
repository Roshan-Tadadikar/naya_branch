import React from "react";
import { Link } from "react-router-dom";



const Results = ({Price, Disp, Fuel, Pow, result={}}) => {
        console.log("ButtonClick", Price)
        console.log("click", result)
    return (
      <div>
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Here are your cars</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
Dream, Dream Dream Dreams transform into thoughts And thoughts result in action </p>
    </div>
    <div class="lg:w-2/3 w-full mx-auto overflow-auto">
      <table class="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Make</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Model</th>
            {/* <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Variant</th> */}
            <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
          </tr>
        </thead>
        <tbody>
        
        {Object.keys(result?.Make).map(function(key, index) {
      return(
       
          <tr className="hover:bg-gray-800 hover:text-white">
            {/* Your results are :
            {result.Make[key]}
            {result.Model[key]}
            {result.Variant[key]} */}
          
            <td class="px-4 py-3 ">{result.Make[key]}</td>
            <td class="px-4 py-3 ">{result.Model[key]}</td>
            {/* <td class="px-4 py-3 "> {result.Variant[key]}</td> */}
            <td class="w-10 text-center">
              {/* <input name="plan" type="radio" /> */}
            </td>
            </tr>
         
      );
})}
       
         
        </tbody>
      </table>
    </div>
    <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
      <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"><Link to="/CarRecom">Let's Try again</Link></button>
    </div>
  </div>
</section>
     {Object.keys(result?.Make).map(function(key, index) {
      return(
        <div>
            {/* Your results are :
            {result.Make[key]}
            {result.Model[key]}
            {result.Variant[key]} */}
          </div>
      );
})}
{/* <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Your results are</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
Dream, Dream Dream Dreams transform into thoughts And thoughts result in action </p>
    </div>
    <div class="lg:w-2/3 w-full mx-auto overflow-auto">
      <table class="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Make</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Model</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Variant</th>
            <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-4 py-3">{result.Make[key]}</td>
            <td class="px-4 py-3">{result.Model[key]}</td>
            <td class="px-4 py-3"> {result.Variant[key]}</td>
            <td class="w-10 text-center">
              <input name="plan" type="radio" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
      <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
    </div>
  </div>
</section> */}
      </div>
    )
  }
  
  export default Results;