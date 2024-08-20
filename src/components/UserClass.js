import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count1: 1,
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Ankit-Dubey123");
    const json = await data.json();
    console.log(json);
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    // const { count1 } = this.state;

    return (
      <div className="user-card">
        <h1>{count}</h1>
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase count
        </button> */}
        <h1>{name}</h1>
        <h2>{location}</h2>
        <h3>Contact: 9125184883</h3>
      </div>
    );
  }
}
export default UserClass;
