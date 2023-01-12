import { Contacts } from './ContactsList/Contacts';
import { Filter } from './Filter/Filter';
import { Form } from './Form/Form';
import { StyledTitleH2 } from './App.styled';
import { useState, useEffect } from 'react';

const KEY_LS = 'contactsList';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem(KEY_LS);
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    if (!contacts.length) {
      return;
    }
    localStorage.setItem(KEY_LS, JSON.stringify(contacts));
  }, [contacts]);

  const contactsHandler = data => {
    const newContacts = contacts.map(contact => contact.name);

    if (newContacts.includes(data.name)) {
      alert('Already in contacts');
      return;
    } else {
      setContacts([data, ...contacts]);
    }
  };

  const handleFilter = event => {
    setFilter(event.target.value.toLowerCase());
  };

  const filteredContacts = () => {
    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
      );
    }
    return [];
  };

  const deleteContactHandler = number => {
    setContacts(prevState =>
      prevState.filter(contact => contact.number !== number)
    );
  };

  return (
    <>
      <StyledTitleH2>Phonebook</StyledTitleH2>
      <Form contactsHandler={contactsHandler} />
      <StyledTitleH2>Contacts</StyledTitleH2>
      <Filter onChange={handleFilter} value={filter} />
      <Contacts contacts={filteredContacts()} onDelete={deleteContactHandler} />
    </>
  );
}

// export class App extends Component {
// state = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// };

// componentDidMount() {
//   const savedContacts = localStorage.getItem(KEY_LS);
//   if (savedContacts) {
//     this.setState({ contacts: JSON.parse(savedContacts) });
//   }
// }

// componentDidUpdate() {
//   localStorage.setItem(KEY_LS, JSON.stringify(this.state.contacts));
// }

// contactsHandler = data => {
//   const newContacts = this.state.contacts.map(contact => contact.name);

//   if (newContacts.includes(data.name)) {
//     alert('Already in contacts');
//     return;
//   } else {
//     return this.setState({ contacts: [data, ...this.state.contacts] });
//   }
// };

// handleFilter = event => {
//   this.setState({ filter: event.target.value.toLowerCase() });
// };

// filteredContacts = () => {
//   return this.state.contacts.filter(contact =>
//     contact.name.toLowerCase().includes(this.state.filter)
//   );
// };

// deleteContactHandler = number => {
//   this.setState(prevState => ({
//     contacts: prevState.contacts.filter(contact => contact.number !== number),
//   }));
// };

//   render() {
//     const { filter } = this.state;
//     return (
//       <>
//         <StyledTitleH2>Phonebook</StyledTitleH2>
//         <Form contactsHandler={this.contactsHandler} />
//         <StyledTitleH2>Contacts</StyledTitleH2>
//         <Filter onChange={this.handleFilter} value={filter} />
//         <Contacts
//           contacts={this.filteredContacts()}
//           onDelete={this.deleteContactHandler}
//         />
//       </>
//     );
//   }
// }
