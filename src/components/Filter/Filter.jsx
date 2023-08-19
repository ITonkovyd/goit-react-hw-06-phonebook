import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contactsSlice';
import { Input, P } from './Filter.styled';

export default function Filter() {
  const dispatch = useDispatch();

  return (
    <>
      <P>Find contact by name</P>
      <label htmlFor="filter">
        <Input
          type="text"
          name="filter"
          onChange={e => dispatch(filterContact(e.target.value.toLowerCase()))}
        />
      </label>
    </>
  );
}
