import { useState } from 'react';
import { StyledForm } from './Form.Styled';

export function Form({ contactsHandler }) {
  const [state, setState] = useState({ name: '', number: '' });

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    contactsHandler(state);
    reset();
  };

  const reset = () => {
    setState({ name: '', number: '' });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label>
        Name
        <input
          value={state.name}
          type="text"
          name="name"
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          value={state.number}
          type="tel"
          name="number"
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </StyledForm>
  );
}

// export class Form extends Component {
// state = {
//   name: '',
//   number: '',
// };

// handleChange = event => {
//   const { name, value } = event.currentTarget;
//   this.setState({ [name]: value });
// };

// handleSubmit = event => {
//   event.preventDefault();
//   this.props.contactsHandler(this.state);
//   this.reset();
// };

// reset = () => {
//   this.setState({ name: '', number: '' });
// };

//   render() {
//     return (
//       <StyledForm onSubmit={this.handleSubmit}>
//         <label>
//           Name
//           <input
//             value={this.state.name}
//             type="text"
//             name="name"
//             onChange={this.handleChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </label>
//         <label>
//           Number
//           <input
//             value={this.state.number}
//             type="tel"
//             name="number"
//             onChange={this.handleChange}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </label>
//         <button type="submit">Add contact</button>
//       </StyledForm>
//     );
//   }
// }
