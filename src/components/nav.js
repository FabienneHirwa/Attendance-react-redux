import React, { Component } from "react";
import { connect } from "react-redux";

class Nav extends Component {
  render() {
  let { users } = this.props;
  let userCountnotAttending = users.filter((v)=>v.confirm === "false")
  let userCountAttending = users.filter((v)=>v.confirm === "true")
  return (
    <>
      <div className="nav ">
        <div>
        <h3><b>ZATEC Trainings!</b></h3>
        </div>
        <div className="attendeesCount">
          <div><h2>Attendees:</h2></div>
          <div><p>{userCountAttending.length}</p></div>
        </div>
        <div className="notAttendeesCount">
          <div><h2>Not Attending:</h2></div>
          <div><p>{userCountnotAttending.length}</p></div>
        </div>
      </div>
    </>
  );
}
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    users: state
  };
};

    
  
  export default connect(mapStateToProps)(Nav);