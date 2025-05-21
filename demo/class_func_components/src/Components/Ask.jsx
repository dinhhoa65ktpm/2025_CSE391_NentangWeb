import React from "react";

class Show extends React.Component {   //what is extends -> explain : inherit from react.component
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.age===""?<p>Welcome</p>:this.props.age>=18?<p>Your are over 18</p>:<p>You are under 18</p>}  {/* tenary operator */}
      </div>
    )
  }
}
class Ask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      userAge: ""
    }
    this.handleChange = this.handleChange.bind(this);  //why binding: providing context
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) {
    this.setState(() => ({
      input: e.target.value   //explain
    }))
  }
  handleClick() {
    this.setState((prevState) => ({
      userAge: prevState.input     //why not just this.state.input -> Virtual DOM mechanism -> setState in handleChane doesn't take effect right away
    }))
  }
  render() {
    return (
      <div>
        <h3>Are you over 18</h3>
        <input type="number" value={this.state.input} onChange={this.handleChange} />
        <p>{this.state.input}</p>
        <button type="submit" onClick={this.handleClick}>Check</button>
        <Show age={this.state.userAge} />
      </div>
    )
  };
}
export default Ask;