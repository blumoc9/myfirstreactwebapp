import React, { Component } from 'react';

class User extends Component{

  render(){
	return(
		 <table align="center">
		  <tr>
		    <th>Name</th>
		    <th>Email</th>
		  </tr>
		  <tr>
		    <td>{this.props.name}</td>
		    <td>${this.props.email}</td>
		  </tr>
		</table>
	);
  }
}
export default User;