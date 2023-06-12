import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "redux/contacts/contactsActions";
import css from "./contactForm.module.css";

const ContactForm = () => {
    const [name, setName] = useState('');
    const [number,setNumber] = useState('');

    const dispatch = useDispatch();

    const handleChange = event => {
        const {name, value} = event.target;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    };

    const handleSubmit = event => {
        event.preventDefault();

        dispatch(addContact({name, number}));
        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    return (
        <form onSubmit={handleSubmit} className={css.form}>
            <label className={css.label}>
                Name
                <input
                className={css.input}
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only latters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                />
            </label>
            <label className={css.label}>
                Number
                <input
                className={css.input}
                type="tel"
                name="number"
                value={number}
                onChange={handleChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                />
            </label>
            <button type="submit" className={css.button}>
                Add contact
            </button>
        </form>
    );
};

export default ContactForm;