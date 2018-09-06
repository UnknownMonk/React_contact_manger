import React, { Component } from 'react';

export class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  };

  render() {
    return (
      <div>
        <div className="card-header">Add Contact </div>
      </div>
    );
  }
}

export default AddContact;
