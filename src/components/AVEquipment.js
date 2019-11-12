import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    border: '2px solid rgb(40, 44, 52);',
    borderRadius: '10px 10px',
    padding: '2%',
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 225,
  },
}));

export default function OutlinedTextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    q1: '',
    q2: ''
  });

  const [state] = React.useState({});

  const [answer, setAnswer] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = name => event => {
  setValues({
      ...values,
      [name]: event.target.value
    });
  };

  const handleYesAndNo = event => {
      setValues(oldValues => ({
        ...oldValues,
        [event.target.name]: event.target.value,
      }));
    };

  const handleClose = () => {
    setOpen(false);
    };

  const handleOpen = () => {
    setOpen(true);
    };

  return (
    <section>
      <div className={classes.container}>
      <h4>Audio & Visual Equipment</h4>
        {/* Require a laptop? */}
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="needLaptop">Require a laptop?</InputLabel>
          <Select
            value={values.q1}
            onChange={handleYesAndNo}
            inputProps={{
              name: 'q1',
              id: 'question-1',
            }}
          >
          <MenuItem value='Yes'>Yes</MenuItem>
          <MenuItem value='No'>No</MenuItem>
        </Select>
        </FormControl>
        {/* Additional Equipment Requirements */}
        <h4>Additional Equipment and/or Network Requirements</h4>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.flipChart}
              onChange={handleChange('flipChart')}
              value="flipChart"
              color="primary"
            />
          }
          label="Flip Chart w/Markers"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.digitalVoiceRecorder}
              onChange={handleChange('digitalVoiceRecorder')}
              value="digitalVoiceRecorder"
              color="primary"
            />
          }
          label="Digital Voice Recorder"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.camera}
              onChange={handleChange('camera')}
              value="camera"
              color="primary"
            />
          }
          label="Camera (Skype)"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.hardwireInternet}
              onChange={handleChange('hardwireInternet')}
              value="hardwireInternet"
              color="primary"
            />
          }
          label="Hardwire Internet"
        />
        {/* Presentation have a video? */}
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="needVideo">Presentation have video?</InputLabel>
          <Select
            value={values.q2}
            onChange={handleYesAndNo}
            inputProps={{
              name: 'q2',
              id: 'question-2',
            }}
          >
            <MenuItem value='Yes'>Yes</MenuItem>
            <MenuItem value='No'>No</MenuItem>
          </Select>
            <TextField
              id="specialRequest"
              label="Special Requests?"
              className={classes.textField}
              value={values.specialRequest}
              onChange={handleChange('specialRequest')}
              margin="normal"
              />
        </FormControl>
      </div>
    </section>
  )

}
