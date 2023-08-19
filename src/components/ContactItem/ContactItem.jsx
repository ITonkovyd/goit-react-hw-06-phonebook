import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { Button, Li } from './ContactItem.styled';

export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();
  return (
    <Li>
      <span>
        {' '}
        &bull; {name}: <br />
        {number}
      </span>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </Li>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
