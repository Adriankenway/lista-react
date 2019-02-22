import React, { Component } from 'react';

import "./app.css";

class App extends Component{
  render(){
    return(
      <div className="container-fluid">
        <InfoUser/>
      </div>
    );
  }
}

function InfoUser(props){
  return(
    <div className="container">
      <img src=""/>
      <h1>{"Adriano"}</h1>
      <p>Idade:{"16"}</p>
      <UserLoginConfig/>
    </div>
  );
}

class UserLoginConfig extends Component{

  constructor(props){
    super(props);
    this.state = {
      email:"",
      senha:""
    }
  }

  render(){
    return(
      <div>
        <form>
          <div className="form-control">
            <label>E-mail</label>
            <input value={this.state.email}/>
          </div>
          <div className="form-control">
            <label>Senha</label>
            <input value={this.state.senha}/>
          </div>
        </form>
      </div>
    )
  }
} 

export default App;
