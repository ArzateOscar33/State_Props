import './Estilos.css';
import React from 'react';
import { Component } from 'react';
  class Banner extends Component{
    render(){
      const {titulo,subtitulo}=this.props;
    return(
      <div className="Banner">
      <h2>{titulo}</h2>
     </div>
    
    );
    }
  }
  export default Banner;