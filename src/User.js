import React, { Component } from 'react';

class User extends Component{

  render(){
	return(
		 <table align="center">
		  <tr>
		    <th>Name</th>
		    <th>Email</th>
		    <th>Age</th>
		  </tr>
		  <tr>
		    <td>{this.props.name}</td>
		    <td>${this.props.email}</td>
		    <td>${this.props.age}</td>
		  </tr>
		</table>
	);
  }
}
export default User;