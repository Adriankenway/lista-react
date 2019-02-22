import React from 'react';

import Campos from './Campos';

import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBjj3YH_ehGf5Gm9AB7iaDh0QS9n_X2fIU",
    authDomain: "reactjs-2f9f5.firebaseapp.com",
    databaseURL: "https://reactjs-2f9f5.firebaseio.com",
    projectId: "reactjs-2f9f5",
    storageBucket: "reactjs-2f9f5.appspot.com",
    messagingSenderId: "692449898109"
  };
  firebase.initializeApp(config);

function TelaCadastro(props){
        return(
            <div className="container container-form form col-md-5">
                <Campos firebase={firebase}/>
            </div>
        );
}

export default TelaCadastro;