import React from "react";
import "./App.css";
import Card from "./Component/Card/Card";

class App extends React.Component {
  state = {
    checked: localStorage.getItem("theme") === "dark" ? true : false,
    theme: localStorage.getItem("theme"),
  };

  componentDidMount() {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }

  toggleThemeChange = () => {
    const { checked } = this.state;
    if (checked === false) {
      localStorage.setItem("theme", "dark");

      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));

      this.setState({
        checked: true,
      });
    } else {
      localStorage.setItem("theme", "light");

      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      // Update our state
      this.setState({
        // Ensure our switch is off if we change to light theme
        checked: false,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="texts">
          <h1>Social Media Dashboard</h1>
          <p>Total Followers: 23,004</p>
        </div>
        <div className="button">
          <p>Dark Mode</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={this.state.checked}
              defaultChecked={this.state.checked}
              onChange={() => this.toggleThemeChange()}
            />
            <span className="slider round" />
          </label>
        </div>
        <div className="cardContainer">
          <Card
            className="card1"
            username="@nathanf"
            number="1987"
            followers="followers"
            height="240px"
            borderTop="5px solid #1CA0F2"
            icon={<i className="fa fa-facebook-square"></i>}
            color="#1CA0F2"
            upperCaret
            number2="12"
            socialOther
            card1
            iconName
          />
          <Card
            className="card2"
            username="@nathanf"
            number="1044"
            followers="followers"
            height="240px"
            borderTop="5px solid #00BFFF"
            icon={<i className="fa fa-twitter"></i>}
            color="#00BFFF"
            upperCaret
            number2="99"
            socialOther
            today="today"
            card1
            iconName
          />
          <Card
            className="card3"
            username="@nathanf"
            number="11000"
            followers="followers"
            height="240px"
            icon={<i className="fa fa-instagram"></i>}
            instagram
            upperCaret
            number2="1099"
            borderTop="5px solid #DF4996"
            card1
            iconName
          />
          <Card
            className="card4"
            username="@nathanf"
            number="1987"
            followers="followers"
            height="240px"
            borderTop="5px solid #C4032A"
            icon={<i class="fa fa-youtube"></i>}
            color="#C4032A"
            lowerCaret
            number2="144"
            iconName
            card1
          />
        </div>
        <h1 className="Overview">Overview - Today</h1>
        <div className="cardContainer2">
          <Card
            username="Retweets"
            icon={<i className="fa fa-facebook-square"></i>}
            height="140px"
            upperCaret
            number="87"
            number2="1099"
            color="#1CA0F2"
            iconName2
            card2
          />
          <Card
            username="Likes"
            icon={<i className="fa fa-facebook-square"></i>}
            height="140px"
            lowerCaret
            number="52"
            number2="2"
            color="#1CA0F2"
            iconName2
            card2
          />
          <Card
            username="Likes"
            icon={<i className="fa fa-instagram"></i>}
            height="140px"
            upperCaret
            number="5462"
            number2="2257"
            color="#1CA0F2"
            iconName2
            card2
          />
          <Card
            username="Profile Views"
            icon={<i className="fa fa-instagram"></i>}
            height="140px"
            upperCaret
            number="52000"
            number2="2257"
            color="#1CA0F2"
            iconName2
            card2
          />
          <Card
            username="Retweets"
            icon={<i className="fa fa-twitter"></i>}
            height="140px"
            upperCaret
            number="117"
            number2="303"
            color="#00BFFF"
            iconName2
            card2
          />
          <Card
            username="Likes"
            icon={<i className="fa fa-twitter"></i>}
            height="140px"
            upperCaret
            number="507"
            number2="553"
            color="#00BFFF"
            iconName2
            card2
          />
          <Card
            username="Likes"
            icon={<i class="fa fa-youtube"></i>}
            height="140px"
            lowerCaret
            number="107"
            number2="19"
            color="#C4032A"
            iconName2
            card2
          />
          <Card
            username="Total Views"
            icon={<i class="fa fa-youtube"></i>}
            height="140px"
            lowerCaret
            number="1407"
            number2="17"
            color="#C4032A"
            iconName2
            card2
          />
        </div>
      </div>
    );
  }
}

export default App;
