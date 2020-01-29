import React from "react";

class Header extends React.Component {
  render() {
    return (
        <div>
            <h1>Header</h1>
            <h2>{this.user.name}</h2>
        </div>
    )
  }
}

export default Header;
