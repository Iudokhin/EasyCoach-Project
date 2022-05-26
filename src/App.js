import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Field from './components/field/Field';
import ParsedTable from './components/table/ParsedTable';
import { MAP, TABLE } from './utils/constants/constants';


function App() {
  const [state, setState] = useState(TABLE)

  return (
    <div>
      <div className='d-flex justify-content-center my-5 gap-4'>
        <button className={state === TABLE ? 'btn btn-secondary': 'btn btn-primary'} onClick={() => setState(TABLE)}>TABLE</button>
        <button className={state === MAP ? 'btn btn-secondary': 'btn btn-primary'} onClick={() => setState(MAP)}>GOAL MAP</button>
      </div>
      {state === TABLE 
        ?
        <ParsedTable />
        :
        <Field />
      }
    </div>
  )
}

export default App;


