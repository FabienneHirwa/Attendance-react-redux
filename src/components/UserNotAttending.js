import React, { Component } from "react";
import { connect } from "react-redux";
import User from "./User";
import EditUser from "./EditUser";

class UserNotAttending extends Component {
  render() {
    const { UserNotAttending } = this.props;
   
    return (
      <div>
        <h2>Not Attending</h2>
        {UserNotAttending.map((user) => (
          <>
          {
            user.confirm === "false" ?
            <div key={user.id} className="notAttending">
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
  return {
    UserNotAttending: state
  };
};

export default connect(mapStateToProps)(UserNotAttending);
