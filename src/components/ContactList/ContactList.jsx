import ContactItem from 'components/ContactItem';
import PropTypes from 'prop-types';
import { Ul } from './ContactList.styled';

export default function ContactList({ contacts }) {
  
  return (
      <Ul>
      {contacts.map((contact) => {
        const {id, name, number} = contact
        return(
          <ContactItem key={id} id={id} name={name} number={number} />
        )
      })
        }
      </Ul>
    )
}


ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
}

