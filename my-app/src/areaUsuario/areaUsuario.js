import React,{Component} from 'react';
import './AreaUsuario.css';

import firebase from 'firebase';

class AreaUsuario extends Component{

	constructor(props){
	   super(props);
	   this.state = {
	     lista:[],
	   }
	 }

	 componentDidMount() {
	 	var user = firebase.auth().currentUser;
	    this.lista = firebase.database().ref('users/' + user.uid + '/lista');
	    this.lista.on('value',(snapshot) => {
	      if(snapshot.val() != null){
	      	this.setState({lista:snapshot.val()});
	      }else{
	      	this.setState({lista:[]})
	      }
	    });
  	 }

	render(){
		return(
			<div className="container-fluid col-md-12 areausuario-body">
				<ol>
		         {this.state.lista.map((item) => <Item lista={this.state.lista} id={item.id} classe={item.urgencia} key={item.titulo.toString()} item={item.titulo}/>)}
		         <Formulario lista={this.state.lista}/>
		       </ol>
			</div>
		);
	}
}



class Formulario extends Component{

  constructor(props){
    super(props);
    this.state = {
      itemNovo:"",
      urgencia:"Urgente"
    }
  }

  mudaUrgencia(e){
    this.setState({urgencia:e.target.value})
  }

  adicionarItem(e){
    this.setState({itemNovo:e.target.value})
  }

  render(){
    return(
      <div>
        <input className="form-control" style={{margin:5}} onChange={this.adicionarItem.bind(this)} type="text" value={this.state.itemNovo}/>
        <select style={{margin:5}} className="form-control" value={this.state.urgencia} onChange={this.mudaUrgencia.bind(this)}>
          <option value="Urgente">Urgente</option>
          <option value="Média">Média</option>
          <option value="Simples">Simples</option>
        </select>
        <NovoItem lista={this.props.lista} item={this.state.itemNovo} urgencia={this.state.urgencia}/>
      </div>
    )
  }
}

class NovoItem extends Component{

  adicionarNovoItem(){
    let tarefa = {
      titulo:this.props.item,
      urgencia:this.props.urgencia,
      id:this.props.lista.length
    }
    this.props.lista.push(tarefa)
    var user = firebase.auth().currentUser
    firebase.database().ref('users/' + user.uid).set({lista:this.props.lista})
  }

  render(){
    return(
      <button onClick={this.adicionarNovoItem.bind(this)} className="btn btn-button btn-success">Add</button>
    );
  }
}

class Item extends Component{

  render(){

    if(this.props.classe === "Urgente"){
      this.classe = "alert alert-danger"
    }else if(this.props.classe === "Média"){
      this.classe = "alert alert-warning"
    }else{
      this.classe = "alert alert-success"
    }

    return(
      <div className="item">
        <li className={this.classe} >{this.props.item}<BotaoRemover lista={this.props.lista} removerItem={this.props.id} /></li>
      </div>
    );
  }
}


class BotaoRemover extends Component{
  removerItem(id,e){
    var user = firebase.auth().currentUser
    if(this.props.lista.length === 1){
      firebase.database().ref('users/' + user.uid).set({lista:[]})
    }else{
      this.props.lista.splice(id,1)
      console.log(this.props.lista.length)
      firebase.database().ref('users/' + user.uid).set({lista:this.props.lista})
    }
  }

  render(){
    return(
       <button onClick={this.removerItem.bind(this,this.props.removerItem)} style={{margin:15}}>x</button>
    )
  }
}

export default AreaUsuario;