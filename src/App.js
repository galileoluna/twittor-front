import React, {useState} from 'react';



export default function App() {

  //creo un nuevo estado
  //var que guarda el estado
  const [user, setUser] =useState({name:"gali"});


//verifico que el useState tenga algun valor
  return (
    <div>
      {user ? (<h1>Estas Logueado</h1>): (<h1>No estas Logueado</h1>)}
    </div>
  )
//cuando usuario tenga contenido


}


