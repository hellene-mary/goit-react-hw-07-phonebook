import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ContactList } from './contacts/ContactList';
import ContactForm from './form/ContactForm';
import { Filter } from './filter/Filter';
import { Container } from './App.styles';
import { selectIsLoading, selectError } from './redux/selectors';
import { fetchContacts } from './redux/operations';
// import { getRandomHexColor } from '../components/utils/getColorsFn';
import { Dna } from 'react-loader-spinner';

document.title = 'PhonebookBox_redux';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && (
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      )}
      <ContactList />
      <ToastContainer
        font-size="15px"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Container>
  );
};

export default App;
