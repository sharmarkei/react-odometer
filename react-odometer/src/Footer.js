import React from 'react';

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            author: '&copy; Sharmarke 2020',
          };
    }

    render() {
        return (
            <>
           <h2>fOoTeR</h2>
           <p>{this.state.author}</p>
           </>
        )
    }
}

export default Footer;