import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi, I am a react App</h1>
        <Person />
      </div>
    );
  }
}

export default App;


//This is the way of creating components in react. First of all we will import 
//Component from 'react' and then make a custom component App which extends component.
//The JSX code that u see in the return looks like HTML but this is a next gen javascript
//code. Basically this code will convert into 
//React.createElement('div',className:'App',React.createElement('h1',,Hi I am a react app)));
//so that browser will understand this. But we prefer to write in JSX way only since
//its really cumbersome to write the code with createElemnent especially when
//we have nested tags.

//Some restrictions for JSX-
//1. Its looks like HTML but its JSX basically and thus some keywords of html will
//not work here. For example HTML class keyword will be className in JSX since
//we already have class keyword with different meaning in javascript.
//2. Make sure the JSX is enclosed in one root div element.If not it will give error.


//Now we will create a new component called People in src folder.