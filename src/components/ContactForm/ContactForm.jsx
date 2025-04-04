import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsOps";

export default function ContactForm() {
  const initialValues = { name: "", number: "" };

  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Must be at least 3 characters")
      .max(50, "Must be less than 50 characters")
      .required("Name is required"),
    number: Yup.string()
      .min(3, "Must be at least 3 characters")
      .max(50, "Must be less than 50 characters")
      .required("Number is required"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <div className={css.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label}>
            Name:
            <Field type="text" name="name" className={css.input} />
            <ErrorMessage name="name" component="div" className={css.error} />
          </label>

          <label className={css.label}>
            Number:
            <Field type="text" name="number" className={css.input} />
            <ErrorMessage name="number" component="div" className={css.error} />
          </label>

          <button type="submit" className={css.button}>
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
