import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/contactsActions';
import css from './contactList.module.css';
import { useDispatch } from 'react-redux';;


export default function ContactListItem({ id, name, number}) {
    const dispatch = useDispatch();
    return (
        <li className={css.item}>
            <p className={css.text}>
                <span className={css.name}>{name}:</span>
                <span>
                    <a href={`tel:${number}`} className={css.tel}>
                        {number}
                    </a>
                </span>
            </p>
            <button
            type="button"
            className={css.button}
            onClick={() => dispatch(deleteContact(id))}
            >
                Delete
            </button>
        </li>
    );
};

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};