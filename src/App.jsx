import { useContext } from 'react';
import './App.css';
import { FormContext } from './context/FormProvider';
import FormNavBar from './components/form-nav-bar';
import FormContent from './components/form-content';
import FullPageLoader from './components/full-page-loader';
import ThankYouPage from './components/thank-you-page/ThankYouPage';

function App() {
  const {
    formStep,
    userData,
    updateUserData,
    confirmForm,
    backToPreviousStep,
    isLoading,
    showThankYouPage,
    startNewForm,
  } = useContext(FormContext);

  return (
    <div className="app">
      {isLoading && <FullPageLoader />}
      {showThankYouPage
        ? (<ThankYouPage startNewForm={startNewForm} name={userData.name} />) : (
          <>
            <FormNavBar currentStep={formStep} />
            <FormContent
              currentStep={formStep}
              updateUserData={updateUserData}
              userData={userData}
              confirmForm={confirmForm}
              backToPreviousStep={backToPreviousStep}
            />
          </>
        ) }
    </div>
  );
}

export default App;
