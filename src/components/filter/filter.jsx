import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterContact } from "redux/contacts/contactsActions";
import { getFilter } from "redux/contacts/contactsSelectors";
import css from './filter.module.css';

const Filter = () => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const changeFilter = event => dispatch(filterContact(event.target.value));


    return (
    <div className={css.box}>
        <label>
            Find contacts by name
            <input 
            type="text" 
            name="filter"
            value={filter} 
            onChange={changeFilter}
            placeholder="Enter search name"
            />
        </label>
    </div>
    );
};



export default Filter;