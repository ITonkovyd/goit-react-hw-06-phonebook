import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { Container } from './App.styled';
import ContactList from './ContactList';
import ContactsForm from './ContactsForm';
import Filter from './Filter';

export function App() {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const filteredContacts = [...contacts];

  function handleFilter() {
    if (contacts.length > 0) {
      return filteredContacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      return contacts;
    }
  }

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactsForm />
      {handleFilter().length > 0 ? (
        <h2>Contacts: {handleFilter().length}</h2>
      ) : (
        <h2>Contacts</h2>
      )}

      {contacts.length > 0 ? (
        <>
          <Filter />

          {filter.trim() !== '' && handleFilter().length === 0 ? (
            <p>You don`t have contacts with this name.</p>
          ) : (
            <ContactList contacts={handleFilter()} />
          )}
        </>
      ) : (
        <p>
          No contacts yet. <br /> It's time to create new contacts!
        </p>
      )}
    </Container>
  );
}
