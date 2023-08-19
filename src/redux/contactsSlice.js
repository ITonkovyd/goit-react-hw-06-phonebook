import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    {
      name: 'Pamela Grady',
      number: '617-423-6419',
      id: '1',
    },
    {
      name: 'Mrs. Nora Green',
      number: '784-432-8108',
      id: '2',
    },
    {
      name: 'Julius Wyman',
      number: '833-550-2172',
      id: '3',
    },
    {
      name: 'Lionel Hintz',
      number: '473-932-5252',
      id: '4',
    },
  ],
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, actions) => {
      state.contacts.push(actions.payload);
    },
    filterContact: (state, actions) => {
      state.filter = actions.payload;
    },
    deleteContact: (state, actions) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== actions.payload
      );
    },
  },
});

export const { addContact, filterContact, deleteContact } =
  contactsSlice.actions;

export default contactsSlice.reducer;
