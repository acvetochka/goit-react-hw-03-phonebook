import { Component } from 'react';
import Notiflix from 'notiflix';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Notification } from '../Notification/Notification';
import { Section } from 'components/Section/Section';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = contactItem => {
    const { name } = contactItem;
    if (this.state.contacts.some(contact => contact.name === name)) {
      Notiflix.Report.warning('Warning', `${name} is already in contacts.`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contactItem, ...contacts],
      }));
    }
  };

  deleteContact = id => {
    this.setState(PrevState => ({
      contacts: PrevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  onChangeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getFilterContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    // this.setState({ contacts: parsedContacts });
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const visibleContacts = this.getFilterContact();
    return (
      <Container>
        <Section title={'Phonebook'}>
          <ContactForm handleSubmit={this.handleSubmit} />
        </Section>
        <Section title={'Contacts'}>
          <Filter onChangeFilter={this.onChangeFilter} />
          {this.state.contacts.length ? (
            <ContactList
              onVisibleContacts={visibleContacts}
              onDeleteContact={this.deleteContact}
            />
          ) : (
            <Notification />
          )}
        </Section>
      </Container>
    );
  }
}

Notiflix.Report.init({
  svgSize: '50px',
  messageFontSize: '20px',
  warning: {
    svgColor: '#44728f',

    buttonBackground: '#44728f',
    backOverlayColor: 'rgba(0,0, 0,0.2)',
  },
});
