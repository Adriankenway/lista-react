import React, { Component } from 'react';
import './App.css';

import TelaCadastro from './telaCadastro/telaCadastro'
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Inicio from './inicio/inicio';
import firebase from 'firebase';
import AreaUsuario from './areaUsuario/areaUsuario';
import Configuration from './configuration/Configuration'

function MenuInicial(props){
  if(firebase.auth().currentUser){
    return(
      <nav className="navbar navbar-expand-md navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/inicio/">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/config/">Configurações</Link>
                </li>
                <li onClick={() => firebase.auth().signOut()} className="nav-item">
                  <Link className="nav-link" to="/inicio/">Sair</Link>
                </li>
            </ul>
          </div>
      </nav>
    )
  }else{
    return(
      <nav className="navbar navbar-expand-md navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/inicio/">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cadastro/">Cadastrar</Link>
                </li>
            </ul>
          </div>
      </nav>
    )
  }
}

export default class App extends Component {

    constructor(props){
      super(props);
      this.state = {
        userLogged: false
      }
    }

    componentDidMount() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({userLogged:true})
        } else {
          this.setState({userLogged:false})
        }
      });
     }

  render(){
    return(
      <div className="container-fluid">
        <Router>
          <div>
            <MenuInicial/>
            <Route path="/inicio/"  render={() => (
              this.state.userLogged ? (
                <AreaUsuario/>
              ) : (
                <Inicio/>
              )
            )}/>
            <Route path="/cadastro/" component={TelaCadastro}/>
            <Route path="/userArea" component={this.state.userLogged === true ? AreaUsuario:TelaCadastro}/>
            <Route path="/config/" component={Configuration}/>
          </div>
        </Router>
      </div>
    );
  }
}



