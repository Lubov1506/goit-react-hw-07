import s from "./ContactsList.module.css";
import { useSelector } from "react-redux";
import { filterList } from "../../helpers/filterList";
import Contact from "../Contact/Contact";
import { selectNameFilter } from "../../redux/filtersSlice";
import { selectContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = filterList(contacts, filter);
  return (
    <div>
      <ul className={s.list}>
        {filteredContacts.map((item) => {
          return <Contact key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default ContactList;
