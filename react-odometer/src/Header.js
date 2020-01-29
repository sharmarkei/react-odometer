import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            greeting: 'WAH GWAM!',
          };
    }

    render() {
        return (
            <>
            <h1>{this.state.greeting}</h1>
            <h2>oDoMeTeR</h2>
           
           </>
        )
    }
}

export default Header;