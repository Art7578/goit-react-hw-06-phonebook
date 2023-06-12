import ContactForm from "./contactForm/contactForm";
import ContactList from "./сontactList/contactList";
import Filter from "./filter/filter";

export const App = () => {
  return (
    <div
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        fontWeight: 700,
        color: '#010101',
        padding: '20px 45px'
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <Filter/>
      <ContactList/>
    </div>
  );
};