import React, { Component } from "react";

import "./App.css";
import TwentyFour from "./components/twenty-four/TwentyFour";
import TwelveMonth from "./components/twelve-month/TwelveMonth";
import NoContract from "./components/no-contract/NoContract";
import Select from "react-select";

const options = [
  { value: "twenty-four", label: "24 meseca" },
  { value: "twelve-month", label: "12 meseci" },
  { value: "no-contract", label: "Bez ugovorne obaveze" },
];

class App extends Component {
  state = {
    selectedOption: { value: "twenty-four", label: "24 meseca" },
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  };

  render() {
    // Conditionally rendering components based on selected option
    let content;
    if (this.state.selectedOption.value === "twenty-four") {
      content = <TwentyFour />;
    } else if (this.state.selectedOption.value === "twelve-month") {
      content = <TwelveMonth />;
    } else {
      content = <NoContract />;
    }

    const { selectedOption } = this.state;

    // Styling react-select dropdown
    const customStyles = {
      control: (base, state) => ({
        ...base,
        background: "#f8f4eb",
        borderColor: "#f8f4eb",
        borderRadius: "10px",
        border: state.isFocused ? 0 : 0,
        boxShadow: state.isFocused ? 0 : 0,
        "&:hover": {
          border: state.isFocused ? 0 : 0,
        },
        marginTop: "18px",
        width: "200px",
      }),
      option: (base) => ({
        ...base,
        background: "#f8f4eb",
        color: "#444f62",
        "&:hover": {
          background: "#7b3972",
          color: "#f7f7f7",
        },
      }),
      menuList: (base) => ({
        ...base,
        padding: 0,
      }),
    };

    return (
      <div className="container">
        <div className="select-wrapper">
          <Select
            styles={customStyles}
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
            components={{
              IndicatorSeparator: () => null,
            }}
          />
        </div>
        <div className="content">{content}</div>
      </div>
    );
  }
}

export default App;
