import React, { useState } from 'react';
import { render } from 'react-dom';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import FlagIcon from './FlagIcon.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function App() {
  const [countries] = useState([
    // GROUP A
    { code: 'qa', title: 'Qatar' },
    { code: 'ec', title: 'Ecuador' },
    { code: 'sn', title: 'Senegal' },
    { code: 'nl', title: 'Países Bajos' },
    // GROUP B
    { code: 'gb-eng', title: 'Inglaterra' },
    { code: 'ir', title: 'Iran' },
    { code: 'us', title: 'Estados Unidos' },
    { code: 'gb-wls', title: ' Gales' },
    // GROUP C
    { code: 'ar', title: 'Argentina' },
    { code: 'sa', title: 'Arabia Saudita' },
    { code: 'mx', title: 'México' },
    { code: 'pl', title: 'Polonia' },
    // GROUP D
    { code: 'fr', title: 'Francia' },
    { code: 'au', title: 'Australia' },
    { code: 'dk', title: ' Dinamarca' },
    { code: 'tn', title: 'Tunisia' },
    // GROUP E
    { code: 'es', title: 'España' },
    { code: 'cr', title: 'Costa Rica' },
    { code: 'de ', title: 'Alemania' },
    { code: 'jp', title: 'Japon' },
    // GROUP F
    { code: 'be', title: 'Belgica' },
    { code: 'ca', title: 'Canada' },
    { code: 'ma', title: 'Marruecos' },
    { code: 'hr', title: 'Croacia' },
    // Group G
    { code: 'br', title: 'Brasil' },
    { code: 'rs', title: 'Serbia' },
    { code: 'ch', title: 'Suiza' },
    { code: 'cm', title: 'Cameroon' },
    // Group H
    { code: 'pt', title: 'Portugal' },
    { code: 'gh', title: 'Ghana' },
    { code: 'uy', title: 'Uruguay' },
    { code: 'kr', title: 'Corea del Sur' },
  ]);

  const [toggleContents, setToggleContents] = useState(
    'Seleccione el Pais Ganador'
  );

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
