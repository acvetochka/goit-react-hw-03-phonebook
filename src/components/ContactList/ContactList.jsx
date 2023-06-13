import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';
import { ContactListStyled } from './ContactList.styled';

export function ContactList({ onVisibleContacts, onDeleteContact }) {
  return (
    <ContactListStyled>
      {onVisibleContacts.map(contact => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          deleteContact={onDeleteContact}
        />
      ))}
    </ContactListStyled>
  );
}

ContactList.propTypes = {
  onVisibleContacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
