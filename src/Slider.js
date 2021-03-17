import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles({
  root: {
    width: 150,
  },
  input: {
    width: 45,
  },
});

const InputSlider = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0.5);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    props.sliderValueCallback (newValue);
    console.log('Send slider volume is ' + newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
    props.sliderValueCallback (Number(event.target.value));
    console.log('Send input volume is ' + Number(event.target.value));
  };

  return (
    <div className={classes.root}>
      <div>
            <Grid item>
                <label className='me-2'>Volume</label>
                <Input
                    className={classes.input}
                    value={value}
                    margin="dense"
                    onChange={handleInputChange}
                    inputProps={{
                    step: 0.1,
                    min: 0,
                    max: 1,
                    type: 'number',
                    'aria-labelledby': 'input-slider',
                    }}
                />
            </Grid>
      </div>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            min = {0}
            max = {1}
            step = {0.1}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default InputSlider
