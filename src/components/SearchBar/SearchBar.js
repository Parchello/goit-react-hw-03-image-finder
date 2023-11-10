import { Formik, Field, Form } from 'formik';
export const SearchBar = ({ addGalery }) => {
  return (
    <div>
      <Formik
        initialValues={{
          queryName: '',
        }}
        onSubmit={async values => {
          await addGalery(values.queryName);
        }}
      >
        <Form>
          <label htmlFor="queryName"></label>
          <Field id="queryName" name="queryName" placeholder="Search" />

          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};
