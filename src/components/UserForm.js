import React, { Component } from "react";
import { connect } from "react-redux";
import './UserFormStyle.css';



class UserForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();

    let name = this.getName.value;
    let surname = this.getSurname.value;
    let telephone = this.getTelephone.value;
    let  email = this.getEmail.value;
    let confirm = this.getConfirm.value
    

    let newUser = {
      id: Math.floor(Math.random() * 1000) + 1,
      name,
      surname,
      telephone,
      email,
      confirm
    };

    this.props.dispatch({
      type: "ADD_USER",
      payload: newUser
    });

    this.getName.value = "";
    this.getSurname.value = "";
    this.getEmail.value = "";
    this.getTelephone.value = "";
  };
  render() {
    return (
      <div className="attendanceForm">
        <h1>Attendee details</h1>
        <form id="userForm" onSubmit={this.handleSubmit}>
            <div className="attendanceForm1">
            <div>
        <label><strong>Full Name</strong>
            <input ref={(input) => {this.getName = input;}} required type="text"placeholder="Name..."/>
            </label>
        </div>
          <br />
          <div>
          <label><strong>Surname</strong> 
          <input ref={(input) => {this.getSurname = input;}} required type="text" placeholder="Surname..."/>
          </label>
          </div>
          <br />
          <div>
          <label> <strong>Telephone</strong>
          <input ref={(input) => {this.getTelephone = input;}} required type="text" placeholder="Telephone..."/>
          </label>
          </div>
          <br />
          <div>
          <label><strong>Email</strong>
          <input ref={(input) => {this.getEmail = input;}} required type="email" placeholder="Email..."/>
          </label>
          </div>
          </div>
          <br />
          <div>
        <h4><strong>Confirming</strong></h4>
        <div>
          <label>
            <input onClick={(input) => {this.getConfirm = input.target;}} name="Attending"  type="radio" value="true" />{' '}
            Attending
            </label>
          <br/>
          <label>
            <input onClick={(input) => {this.getConfirm = input.target;}} name="Attending"  type="radio" value="false" />{' '}
            Not attending
            </label>
         
        </div>
      </div>
      <div></div><br/>
          <button className="submitButton">Submit</button>
        </form>
        
      </div>
    );
  }
}

export default connect()(UserForm);
