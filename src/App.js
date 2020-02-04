import React, { Component, useState } from 'react';
import './App.css';


const Texto = () => (
    <h1>Componente Texto</h1>
);

const TextoDos = () => (
    <h1>Componente Texto Numero 2</h1>
);

const Image = () => (

    <img src="https://pbs.twimg.com/media/C3d9NXIUMAA8J8I.jpg"alt="Fat-Yoshi"/>
);

const Input = () => (

    <input type="text" name="textInput"/>

);

const Button = () => (

    <button type="button">Botón</button> 
);

const Form = () => {
    return(
    <form>
        First name:
        <input type="text" name="firstname"/><br/>
        Last name: 
        <input type="text" name="lastname"/><br/>
        <button type="button">Aceptar</button>
      </form>
      
      )
      
};


const Carousel = ({children}) => {
    const [index, next] = useState(0);
    
    
    
    
    return (<>
        <button onClick={() => {next(index-1)}}>Prev</button>
        <button onClick={() => {next(index+1)}}>Next</button>
        <div>{children[index]}</div>
        </>
    );

};


const array = [<Texto/>,<TextoDos/>,<Image/>,<Input/>,<Button/>,<Form/>];


class App extends Component {
    
  render() {
    
    return (
      <div className="App" style={{padding: 25}}>
    <Carousel> 
        {array}
    </Carousel>

       
         
      </div>
    );
  }
}




export default App;