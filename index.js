import React, { useState } from 'react';
import { render } from 'react-dom';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import FlagIcon from './FlagIcon.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function App() {
  const [countries] = useState([
    { code: 'gr', title: 'Greece' },
    { code: 'gb', title: 'United Kingdom' },
    { code: 'us', title: 'Estados Unidos' },
    { code: 'ec', title: 'Ecuador' },
  ]);
  const [toggleContents, setToggleContents] = useState('Select a country');
  const [selectedCountry, setSelectedCountry] = useState();

  return (
    <div className="App">
      <Form>
        <Dropdown
          onSelect={(eventKey) => {
            const { code, title } = countries.find(
              ({ code }) => eventKey === code
            );

            setSelectedCountry(eventKey);
            setToggleContents(
              <>
                <FlagIcon code={code} /> {title}
              </>
            );
          }}
        >
          <Dropdown.Toggle
            variant="secondary"
            id="dropdown-flags"
            className="text-left"
            style={{ width: 300 }}
          >
            {toggleContents}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {countries.map(({ code, title }) => (
              <Dropdown.Item key={code} eventKey={code}>
                <FlagIcon code={code} /> {title}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Form>
    </div>
  );
}

render(<App />, document.getElementById('root'));
