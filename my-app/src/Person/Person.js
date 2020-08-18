import React from 'react';
import './Person.css';

const person = (props) =>{
    return(
        <div className = 'Person'>
            <p onClick = {props.click}>I am a {props.name} component. My age is {props.age} years.</p>
            <p>{props.children}</p>
            <input type = 'text' onChange={props.change} value ={props.name}/>
        </div>
    )
    
        
};

export default person;

//The most important use of react components isbasiscally craeting the dynmaic
//content. Till Now we were just creating static component but now we will move to
//the dynamic part. Firstly we will just create the dynamic component with the 
//help of one line expression statement. 

//Now we will use props to make our content dynamic- Props are basically the properties
//or attributes that you have passes to your components where we are actually using it.
//This will make our components reusable and dynamic.

//Props children - this is the reserved property which is passed between the closing
//and operning tags like <Person>Hobbies are dance and cricket</Person>.

//What are states - states are the reserved properties that can be used in the
//components/class which are extending component class. Refer to the props and states 
//pdf.

//Now with the help of state we will add event handlers in our code. We will add
//a button and define a user  defined state which will handle the button event.

//Now if you want to mnaipulate the state, you can do in your event handler.
//this.setState will rerender the react DOM elemnent. 

//What are hooks - These are the way of  managing states inside a functional  component.
//States can only be used in class components thus we use hooks in functional  component.
//For this first we will convert our app.js class component into a functional component and
//we will use useState hook. useState is a function that has two parameters. One is
// the state  and the other is setState which will allow you to change your 
//state.

//Thus there will be two  types of components- Stateful(smart components) - ones which will have states either its a functional or 
//class component. Stateless(Presentational/Dumb Compoenents)- which doesnt  have states.

//Passing Method Reference between components- Now if you want to make the click event on the p element of
//Person.js, then you need to call the buttonClickHandler of App.js but since its a different compoennet you
//cant do that. Thus what you can do is pass the method reference in the props of the components and
//then use that props. You can also pass the value for this buttonclickhandler using bind function.

//Two way binding - Now if you want to change the name based on what you are typing in text box, you can
//do it by using a event object in the state.

//Ading css for your Person component to make it look like a card.Create a person.css file and import it your Person.js
//ie your person compoennt.