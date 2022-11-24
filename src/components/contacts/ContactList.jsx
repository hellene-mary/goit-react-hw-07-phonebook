import { useSelector, useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContact } from 'components/redux/operations';
import { toast } from 'react-toastify';
import { selectContacts, selectContactsFilter } from './../redux/selectors';

// компонент використовую список контактів з стору через useSelector
export function ContactList() {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectContactsFilter).toLowerCase();

  // надсилання екшона видалення контакту за допомогою useDispatch
  const dispatch = useDispatch();
  const handleDelete = evt => {
    dispatch(deleteContact(evt.target.id));
    // ^ сповіщення має відображатись у featch??
    toast.info(`This contact is delited from your phonebook!`);
  };

  const getVisibilityContacts = () => {
    if (!filterValue || filterValue === '') {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };

  const visibilityContacts = getVisibilityContacts();

  return (
    <ul className={css.contactsList}>
      {visibilityContacts.map(contact => (
        <li key={contact.id} className={css.contact}>
          {contact.name}: {contact.phone}
          <button type="button" id={contact.id} onClick={handleDelete}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
