import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Odometer from './Odometer'
import './App.css';

class App extends React.Component {
  render(){

    let greeting = "Good Day!"
    
    const user = {
        name:'shark',
        role: 'dev',
    }

    return (
      <div className="App">
        <Odometer />
        <Header />
        <Footer />
        
      </div>
    );
  }

}

export default App;
