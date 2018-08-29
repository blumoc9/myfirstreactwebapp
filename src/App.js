import React, { Component } from 'react';
import UserList from './UserList';
import UserForm from './UserForm';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor(){
    super();
    this.state ={
      users:[
      {id:1,name: "Fernando",email: "blumxp@gmail.com"},
      {id:2,name: "Juan Fr", email: "blumxp2@gmail.com"}
      ]
    };
  }

  handleOnAddUser (event) {
    event.preventDefault();
    let user = {
      name: event.target.name.value,
      email: event.target.email.value
    };
    this.setState({
      users: this.state.users.concat([user])
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <p className="App-intro">
          <h1>Agregar Usuarios</h1>  <UserForm onAddUser={this.handleOnAddUser.bind(this)} />
          <UserList users={this.state.users}/>
        </p>
      </div>
      
    );
  }
}

export default App;
