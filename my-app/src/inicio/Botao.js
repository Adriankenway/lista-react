import React,{Component} from 'react';

import firebase from 'firebase';

class Botao extends Component{

	login(){
		console.log(this.props.login)
		firebase.auth().signInWithEmailAndPassword(this.props.email, this.props.senha).catch((error) => {
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  console.log(errorCode);
		  console.log(errorMessage);
		});
	}

	render(){
		return(
			<button onClick={this.login.bind(this)} className="btn btn-button btn-success">Login</button>
		);
	}
}

export default Botao;