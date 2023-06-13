import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Form, FormLabel, FormInput, FormButton } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onFormSubmit = evt => {
    evt.preventDefault();
    const { name, number } = evt.currentTarget.elements;

    const contactItem = {
      id: nanoid(),
      name: name.value,
      number: number.value,
    };

    evt.currentTarget.reset();
    this.props.handleSubmit(contactItem);
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ id: '', name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.onFormSubmit}>
        <FormLabel>
          Name
          <FormInput
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я\s]+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>
        <FormLabel>
          Number
          <FormInput
            onChange={this.handleChange}
            type="tel"
            name="number"
            pattern="\+?[0-9\s\-\(\)]+"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>
        <FormButton type="submit">Add contact</FormButton>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
};
