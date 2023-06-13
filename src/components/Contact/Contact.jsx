import { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactItem, ContactData, ButtonDelete } from './Contact.styled';

export class Contact extends Component {
  state = {
    id: this.props.id,
  };

  deleteContact = () => {
    this.props.deleteContact(this.state.id);
  };

  render() {
    return (
      <ContactItem key={this.state.id}>
        <ContactData>
          {this.props.name}: <span>{this.props.number}</span>
        </ContactData>
        <ButtonDelete type="button" onClick={this.deleteContact}>
          Delete
        </ButtonDelete>
      </ContactItem>
    );
  }
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
