import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    display: 'flex',
    minWidth: 150,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    display: 'flex',
    flexWrap: 'wrap',
  },
  container: {
    border: '2px solid rgb(40, 44, 52);',
    borderRadius: '10px 10px',
    padding: '2%',
    margin: theme.spacing(1),
  }
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    q1: '',
    q2: ''
  });
  const [state, setState] = React.useState({});


  const handleChange = name => event => {
    setValues({
      ...values,
      [name]: event.target.value
    });
    setState({
      ...state,
      [name]: event.target.checked
    });
  };

  const handleYesAndNo = event => {
      setValues(oldValues => ({
        ...oldValues,
        [event.target.name]: event.target.value,
      }));
    };

  return (
    <section>
      <form autoComplete="off">
        <div className={classes.container}>
          <h3>Type of Food Service:</h3>
          {/* Type of breakfast and if off-site preferred restaurant */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.breakfast}
                  onChange={handleChange('breakfast')}
                  value="breakfast"
                  color="primary"
                />
              }
              label="Breakfast"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.morningBreak}
                  onChange={handleChange('morningBreak')}
                  value="morningBreak"
                  color="primary"
                />
              }
              label="Morning Break"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.lunch}
                  onChange={handleChange('lunch')}
                  value="lunch"
                  color="primary"
                />
              }
              label="Lunch"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.afternoonBreak}
                  onChange={handleChange('afternoonBreak')}
                  value="afternoonBreak"
                  color="primary"
                />
              }
              label="Afternoon Break"
            />
          {/* Questions asking about Off-site Dinner */}
          <FormControl className={classes.formControl}>
             <InputLabel htmlFor="offsiteDinner">Off-site Dinner?</InputLabel>
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
             <TextField
               id="preferredRestaurant"
               label="If yes, preferred restaurant?"
               className={classes.textField}
               value={values.preferredRestaurant}
               onChange={handleChange('preferredRestaurant')}
               margin="normal"
               />
           </FormControl>
        </div>
      </form>
    </section>
  );
}
