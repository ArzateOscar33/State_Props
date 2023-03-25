import React from "react";
import { Component } from "react";
import { Button, Table } from "react-bootstrap";
import './Estilos.css';

const Listado=(props)=>{


    return(
        
        
        <div>
             <h4 className="materias">Materias</h4>
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Clave</th>
                    <th>Materia</th>
                    <th>Hora</th>
                    <th>Grupo</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    props.lista.map((a,index)=>
                    <tr key={index}>
                        <td>{a.clave}</td>
                        <td>{a.materia}</td>
                        <td>{a.hora}</td>
                        <td>{a.grupo}</td>
                        <td><Button onClick={()=>props.eliminar(a)} variant="danger">-</Button></td>
                    </tr>
                    )

                }
            </tbody>

            </Table>
           


        </div>
    )
}

export default Listado;