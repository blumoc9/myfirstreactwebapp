import React, { Component }  from 'react';


export default class UserForm extends Component{
	render(){
		return(
			<form onSubmit={this.props.onAddUser}>
				<input type="text" placeholder="Nombre" name="name"/>
				<input type="email" placeholder="email" name="email"/>
				<input type="submit" value="Guardar Usuario" />
			</form>	
		);
	}
}
