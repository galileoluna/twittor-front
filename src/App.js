import React, {useState} from 'react';
import {Button, Alert} from "react-bootstrap";


import SignInSingUp from './page/SignInSingUp';


export default function App() {

  //creo un nuevo estado
  //var que guarda el estado
  const [user, setUser] =useState({name:"gali"});


//verifico que el useState tenga algun valor
  return (<div>{user ? (
    <div>
      <SignInSingUp />
    </div>
  ): (<h1>No estas Logueado</h1>)}</div>)
//cuando usuario tenga contenido


}


