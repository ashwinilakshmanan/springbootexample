import React from "react";
import UserService from "../services/UserService";
import UserServiceFetch from "../services/UserServiceFetch";

class UserComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
    };
  }

  //using axios

//   componentDidMount(){
//     UserService.getUsers().then((response)=>{
//         this.setState({users:response.data})
//     });
//   }

//using fetch api

componentDidMount(){
    UserServiceFetch.getUsers().then((response)=>{
        this.setState({users:response})
    })
}
  render() {
    return (
    <div>
        <h1 className="text-center">Users List</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <td>User Id</td>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>e-mail</td>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.users.map((user)=>
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    </div>
    );
  }
}

export default UserComponent;
