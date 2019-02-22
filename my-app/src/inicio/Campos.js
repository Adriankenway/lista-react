import React,{Component} from 'react';

import Botao from './Botao';
import './inicio.css'


class Campos extends Component{

	constructor(props){
		super(props);
		this.state = {
			email:"",
			senha: ""
		}
		this.atualizaInput = this.handleInputChange.bind(this);
	}

	 handleInputChange(event) {
	    const target = event.target;
	    const value = target.type === 'checkbox' ? target.checked : target.value;
	    const name = target.name;

	    this.setState({
	      [name]: value
	    });
	 }

	render(){
		return(
			<div>
				<form>
					<label>E-Mail:</label><br/>
					<input name="email" onChange={this.atualizaInput} value={this.state.email} type="email"/><br/>
					<label>Senha:</label><br/>
					<input name="senha" onChange={this.atualizaInput} value={this.state.senha} type="password"/><br/>
				</form>
				<Botao email={this.state.email} senha={this.state.senha}/>
			</div>
		);
	}
}

export default Campos; 