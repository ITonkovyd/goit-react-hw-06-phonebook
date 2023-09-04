import ContactItem from 'components/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { Ul } from './ContactList.styled';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
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
    <>
      {filter.trim() !== '' && handleFilter().length === 0 ? (
        <p>You don`t have contacts with this name.</p>
      ) : (
        <Ul>
          {handleFilter().map(contact => {
            const { id, name, number } = contact;
            return <ContactItem key={id} id={id} name={name} number={number} />;
          })}
        </Ul>
      )}
    </>
  );
}

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
// };
