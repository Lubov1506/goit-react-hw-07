import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "./ContactsForm.module.css";
import { FeedbackSchema } from "../../helpers/validateSchema";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const ContactForm = () => {
  const dispatch = useDispatch();
  const initValue = {
    name: "",
    number: "",
  };
  const handleSubmit = (values, action) => {
    dispatch(addContact(values));
    action.resetForm();
  };
  return (
    <Formik
      initialValues={initValue}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.form}>
        <label className={s.col}>
          Name
          <Field type="text" name="name" className={s.input} />
          <ErrorMessage className={s.error} name="name" component="span" />
        </label>

        <label className={s.col}>
          Number
          <Field type="number" name="number" className={s.input} />
          <ErrorMessage className={s.error} name="number" component="span" />
        </label>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
