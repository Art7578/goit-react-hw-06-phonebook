import { useSelector } from "react-redux";
import ContactListItem from "./contactListItem";
import { getContacts, getFilter } from "redux/contacts/contactsSelectors";
import css from './contactList.module.css';

export default function ContactList() {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const normalizedData = filter.toLowerCase();
    const normalizedContacts = contacts.filter(contact => 
        contact.name.toLowerCase().includes(normalizedData)
    );

    return (
        <ul className={css.list}>
            {normalizedContacts.map(({id, name, number}) => (
                <ContactListItem name={name} number={number} key={id} id={id} />
            ))}
        </ul>
    );
}