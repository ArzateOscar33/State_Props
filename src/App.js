import logo from './logo.svg';
import Swal from 'sweetalert2'
import './App.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Body from './Components/Body';
import Listado from './Components/Listado';
import { Component } from 'react';
import React from 'react';
import { Button, Table } from "react-bootstrap";

class App extends Component{
  constructor(){
    super();
    this.state={
        materia:[
        {clave:"AEB-1011",materia:"Desarrollo de Aplicaciones Moviles",hora:"17:00-18:00",grupo:"C7A"},
        {clave:"AEB-1055",materia:"Programacion Web",hora:"14:00-15:00",grupo:"C7A"},
        {clave:"SCD-1066",materia:"Lenguajes y Automatas II",hora:"16:00-17:00",grupo:"C7A"},
        {clave:"ACA-0909",materia:"Taller de Investigacion I",hora:"13:00-14:00",grupo:"C7A"},
        {clave:"AEB-1011",materia:"Desarrollo de Aplicaciones Moviles",hora:"16:00-17:00",grupo:"C7B"},
        {clave:"AEB-1055",materia:"Programacion Web",hora:"17:00-18:00",grupo:"C7B"},
        {clave:"SCD-1016",materia:"Lenguajes y Automatas II",hora:"15:00-16:00",grupo:"C7B"},
        {clave:"ACA-0909",materia:"Taller de Investigacion",hora:"14:00-15:00",grupo:"C7B"},
      ],
        lista:[],
        desactivado:false,
    };
}


guardarCambios=(e)=>{
  this.setState({
    lista:[...this.state.lista,e]
  })
  console.log(e);
  }
agregar=(p)=>{
  let temporal=this.state.lista.find((d,i)=>d.id!=p.id)
  console.log(temporal);
}
  eliminar=(id)=>{
    const temporal= this.state.lista.filter(a=>a.clave!==id)
    this.setState({
        ...this.state,
        lista:temporal
        
    })
    console.log("Eliminar")

}



render(){

  return (
    <div className="App">
     <Header/>
     <Banner
     titulo="Por una Juventud Integrada al Desarrollo de Mexico">

     </Banner>
   
     <Body
     clave={this.state.clave}
     materia={this.state.materia}
     hora={this.state.hora}
     grupo={this.state.grupo}
     guardarCambios={this.guardarCambios}

     />
     <Listado
     lista={this.state.lista}
     eliminar={this.eliminar}
     
     ></Listado>
    
     <Banner
     titulo="Copyright Todos los derechos reservados"></Banner>


    </div>
  );
}
}
export default App;
