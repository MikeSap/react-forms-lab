import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  messageChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    let charNumber = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" 
        name="message" 
        id="message" 
        onChange={e => this.messageChange(e)}
        value={this.state.message}/>
        {charNumber}
      </div>
    );
  }
}

export default TwitterMessage;
