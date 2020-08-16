import React from 'react';

const person = (props) =>{
    return(
        <div>
            <p>I am a {props.name} component. My age is {props.age} years.</p>
            <p>{props.children}</p>
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

