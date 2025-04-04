import { useDispatch, useSelector } from "react-redux";
import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { ErrorMessage } from "formik";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import {
  selectContacts,
  selectError,
  selectLoading,
} from "../../redux/contactsSlice";

function App() {
  const dispatch = useDispatch();

  const items = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <h1 className={css.text}>Phonebook</h1>
      {loading && <p>Loading</p>}
      {error && <ErrorMessage />}
      <ContactForm />
      <SearchBox />
      {items.length > 0 && <ContactList />}
    </div>
  );
}

export default App;
