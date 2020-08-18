//import React, { useState} from 'react';
import React, { Component} from 'react';
import './App.css';
import Person from './Person/Person.js';

//Class Component.
class App extends Component {
  state = {
    persons : [
      { name : 'Max', age: 29} ,
      { name : 'Manu', age: 25} ,
      { name : 'Stephanie', age: 29} 

    ]
  }

  //buttonClickHandler = ()=> {
    buttonClickHandler = (newName)=> {
    //console.log("Button was clicked");
    //this.state.person[0].name = "Maximilliab" -  Dont do this since react wont understand this
    this.setState({
      persons: [
        //{ name : 'Maximillian', age: 29} ,
        { name : newName, age: 29} ,
        { name : 'Manu', age: 25} ,
        { name : 'Stephanie', age: 29} 
      ]
    })
  }

  nameChangeHandler = (event)=>{
    this.setState({
      persons: [
        //{ name : 'Maximillian', age: 29} ,
        { name : 'Max', age: 29} ,
        { name : event.target.value, age: 25} ,
        { name : 'Stephanie', age: 29} 
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1> Hi, I am a react App</h1>
        <button onClick = {this.buttonClickHandler}>Click Button</button>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} click = {this.buttonClickHandler.bind(this, 'Max!!!')} />
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age} change = {this.nameChangeHandler}>Hobbies are dance and cricket </Person>
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;

//Functional Component.
/*const app = (props)=>{
  const [personState, setPersonState] = useState({
    persons:[
      {name: 'Max', age:28},
      {name: 'Manu', age:30},
      {name: 'Stephanie', age:29}

    ]
  });

  const buttonClickHandler = ()=>{
    setPersonState({
      persons:[
        {name: 'Maxilian', age:28},
        {name: 'Manu', age:30},
        {name: 'Stephanie', age:29}
  
      ]
    });
  };

  
  return (
    <div className="app">
      <h1> Hi, I am a react App</h1>
      <button onClick = {buttonClickHandler}>Click Button</button>
      <Person name = {personState.persons[0].name} age = {personState.persons[0].age} />
      <Person name = {personState.persons[1].name} age = {personState.persons[1].age}>Hobbies are dance and cricket </Person>
      <Person name = {personState.persons[2].name} age = {personState.persons[2].age} />
    </div>
  );
} 

 

  
    
  



export default app;*/


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