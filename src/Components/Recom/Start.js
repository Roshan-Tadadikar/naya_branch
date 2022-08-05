import React, { Component } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Confirmation from "./Confirmation";
import Success from "./Success";
export default class Start extends Component {
  state = {
    step: 1,
    price: "",
    displacement: "",
    fuel: "",
    power: "",
  };
  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };
  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };
  // handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  //

  render() {
    const { step } = this.state;
    const { price, displacement, fuel, power } = this.state;
    const values = { price, displacement, fuel, power };
    switch (step) {
      case 1:
        return (
          <Step1
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Step2
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Step3
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Step4
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <Confirmation
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            values={values}
          />
        );
      case 6:
        return <Success />;
      default:
      // do nothing
    }
  }
}
