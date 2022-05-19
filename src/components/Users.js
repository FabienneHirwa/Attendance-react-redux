import React, { Component } from "react";
import { connect } from "react-redux";
import User from "./User";
import EditUser from "./EditUser";

class Users extends Component {
  render() {
    const { users } = this.props;
    
    return (
      <div>
        <h2>Attendees</h2>
        {
          console.log(users)
        }
        {users.map((user) => (
          <>
          {
            user.confirm === "true" ? 
            <div key={user.id} className="attending">
            {user.editing ? (
              <EditUser user={user} key={user.id} />
            ) : (
              <User user={user} key={user.id} />
            )}
          </div> : null
          }
          </>
         
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    users: state
  };
};

export default connect(mapStateToProps)(Users);
