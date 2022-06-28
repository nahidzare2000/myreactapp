import React from 'react';
import { BrowserRouter as Router, Route, Routes } from  'react-router-dom';

// style
import './assets/styles/App.css';

// views
import ContactUs from './views/Contact-us';
import CustomQuote from './views/Custom-quote';
import DesigningServise from './views/Designing-services';
import Home from './views/Home';
import MailingServices from './views/Mailing-services';
import PrintingServise from './views/Printing-services';

function App() {
  return (

    <Router>
        <Routes>
            <Route
                index
                element={<Home />}
                />
            <Route
                path="printing-servise"
                element={<PrintingServise />}
            />
            <Route
                path="designing-servise"
                element={<DesigningServise />}
            />
            <Route
                path="mailing-servise"
                element={<MailingServices />}
            />
            <Route
                path="custom-quote"
                element={<CustomQuote />}
            />
            <Route
                path="contact-us"
                element={<ContactUs />}
            />
        </Routes>
    </Router>

  );
}

export default App;
