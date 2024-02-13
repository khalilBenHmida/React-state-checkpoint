import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: "John Doe",
        bio: "investor and business owner.",
        imgSrc: "https://example.com/john-doe.jpg",
        profession: "Developer",
      },
      show: false,
      intervalId: null,
      timeSinceMount: 0,
    };
  }

  componentDidMount() {
    this.setState({ intervalId: setInterval(this.updateTimeSinceMount, 1000) });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  updateTimeSinceMount = () => {
    this.setState((prevState) => ({
      timeSinceMount: prevState.timeSinceMount + 1,
    }));
  };

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timeSinceMount } = this.state;

    return (
      <div className="App">
        <h1>Person Profile</h1>
        <button onClick={this.toggleShow}>
          {show ? "Hide Profile" : "Show Profile"}
        </button>

        {show && (
          <div>
            <img src={imgSrc} alt={fullName} />
            <p>{bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}

        <p>Time since mount: {timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;
