import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

import Landing from "views/Landing";
import CarRecom from "views/CarRecom";
import Start from "Components/Recom/Start";
//  ignore budget ,engine powe,and fuel files .steps and start for saving and passing state . get back to me incase error shows up
import Step1 from "Components/Recom/Step1";
import Step2 from "Components/Recom/Step2";
import Step3 from "Components/Recom/Step3";
import Step4 from "Components/Recom/Step4";
import Results from "Components/Recom/Results"

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Landing} />

      <Route path="/CarRecom" exact component={CarRecom} />
      <Route path="/Start" exact component={Start} />
      <Route path="/Step1" exact component={Step1} />
      <Route path="/Step2" exact component={Step2} />
      <Route path="/Step3" exact component={Step3} />
      <Route path="/Step4" exact component={Step4} />
      <Route path="/results" exact component={Results} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
