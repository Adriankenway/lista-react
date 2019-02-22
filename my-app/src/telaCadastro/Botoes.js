import React from 'react';

class Botoes extends React.Component{

    constructor(props){
        super(props);
        this.cadastrar = this.criarContaEmailSenha.bind(this)   
        this.cadastrarGoogle = this.cadastrarGoogle.bind(this)
    }

    criarContaEmailSenha(){
        this.props.autenticador.auth().createUserWithEmailAndPassword(this.props.email,this.props.senha).then(() => {
             alert('Conta criada com sucesso !!!!!')
        },(error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
          });
    }

    cadastrarGoogle(){
        var provider = new this.props.autenticador.auth.GoogleAuthProvider();
        this.props.autenticador.auth().signInWithPopup(provider).then(function(result) {
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
          });
    }

    render(){
        return(
        <div className="container">
            <button onClick={this.cadastrar} className="btn btn-button btn-success">Cadastrar</button>
            <div className="container">
                <i onClick={this.cadastrarGoogle} className="fab fa-google"></i>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-github"></i>
            </div>
        </div>
        )
    };
  }

export default Botoes;
