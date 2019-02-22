import React,{Component} from 'react';

import './configuration.css'

class Configuration extends React.Component{
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
        <div className="container container-config">
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
              <div className="form-control form-control-config">
                <label className="label-config">E-mail</label>
                <input value={this.state.email}/>
              </div>
              <div className="form-control form-control-config">
                <label className="label-config">Senha</label>
                <input value={this.state.senha}/>
              </div>
            </form>
          </div>
        )
      }
}

export default Configuration;