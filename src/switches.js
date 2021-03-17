import React from 'react';
import Switch from '@material-ui/core/Switch';
import { FormControlLabel } from '@material-ui/core';


const Switches = (props) => {
  const [state, setState] = React.useState({
      power: '',
      bank: ''
  });

  const handleChange = (event) => {
    // wrong: event.target.checked won't change because you delete the second switch named CheckB from sample
    setState({ ...state, [event.target.name]: event.target.checked})

    props.parentCallback ({ ...state, [event.target.name]: event.target.checked});

    // NOT WORKING: event.target.checked is the same for both switches
    // setState({[event.target.name]: event.target.checked });

    console.log({ ...state, [event.target.name]: event.target.checked});

    // works for single switch
    // setState({
    //   checkA: event.target.checked
    // })
  };

  return (
    <div>
        <FormControlLabel
          checked={state.power}
          name="power"
          control={<Switch color="primary" />}
          label={<span style={{fontSize: '1.1rem', fontWeight:'bolder'}}>Power</span>}
          labelPlacement="top"
          onChange={handleChange}
        />
        <FormControlLabel
          checked={state.bank}
          name="bank"
          control={<Switch color="primary" />}
          label={<span style={{fontSize: '1.1rem', fontWeight:'bolder'}}>Bank</span>}
          labelPlacement="top"
          onChange={handleChange}
        />
    </div>
  );
}

export default Switches