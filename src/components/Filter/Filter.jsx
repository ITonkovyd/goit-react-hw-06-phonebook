import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/contactsSlice';
import { getFilter } from 'redux/selectors';
import { Input, P } from './Filter.styled';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <>
      <P>Find contact by name</P>
      <label htmlFor="filter">
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={e => dispatch(filterContact(e.target.value.toLowerCase()))}
        />
      </label>
    </>
  );
}
