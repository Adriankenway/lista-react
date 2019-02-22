import React from 'react';

import Botoes from './Botoes';

class Campos extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      nome:"",
      idade:"",
      email:"",
      senha:""
    }
    this.atualizaInput = this.handleInputChange.bind(this)
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
          <div className="form-group">
            <p>Nome:</p>
            <input name="nome" value={this.state.nome} onChange={this.atualizaInput} className="form-control" placeholder="Digite seu nome:"/>
          </div>
          <div className="form-group">
            <p>Idade:</p>
            <input name="idade" value={this.state.idade} onChange={this.atualizaInput} className="form-control" type="number" placeholder="Digite sua idade:"/>
          </div>
          <div className="form-group">
            <p>E-Mail:</p>
            <input name="email" value={this.state.email} onChange={this.atualizaInput} className="form-control" type="email" placeholder="Digite seu E-Mail:"/>
          </div>
          <div className="form-group">
            <p>Senha</p>
            <input name="senha" value={this.state.senha} onChange={this.atualizaInput} className="form-control" type="password" placeholder="Digite sua idade:"/>
          </div>
        </form>
        <Botoes 
        autenticador={this.props.firebase} 
        email={this.state.email.toString()} 
        senha={this.state.senha.toString()}/>
      </div>
  );
  }
}

export default Campos;